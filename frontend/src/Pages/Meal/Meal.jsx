import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { styles } from "./styles";
import { api } from "../../Services/api";
import { AuthContext } from "../../Context/AuthContext";
import { ToastContext } from "../../Context/ToastContext";

export default function Meal() {
    const { id } = useParams();
    const { logout } = useContext(AuthContext);
    const { toast } = useContext(ToastContext); // ATIVAR TOAST
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        async function load() {
        try {
            const res = await api.get(`/meals/${id}`);
            setMeal(res);
        } catch (e) {
            if (e.status === 401) return logout();
            toast("Refeição não encontrada", "error");
            setTimeout(() => {
            window.location.href = "/dashboard";
            }, 1200);
        }
        }
        load();
    }, [id]);

    async function handleDelete() {
        if (!window.confirm("Confirmar exclusão?")) return;

        try {
        await api.del(`/meals/${id}`);
        toast("Refeição excluída com sucesso!", "success");

        setTimeout(() => {
            window.location.href = "/dashboard";
        }, 1000);

        } catch (e) {
        if (e.status === 401) return logout();
        toast(e.data?.error || "Erro ao excluir refeição", "error");
        }
    }

    if (!meal)
        return (
        <div style={styles.page}>
            <Navbar active="dashboard" />
            <div style={{ padding: 40 }}>Carregando...</div>
        </div>
        );

    return (
        <div style={styles.page}>
        <Navbar active="dashboard" />

        <div style={styles.main}>
            <h1 style={styles.title}>{meal.name}</h1>
            <div style={styles.meta}>
            {new Date(meal.datetime).toLocaleString()}
            </div>

            <div style={styles.card}>
            <p style={{ margin: 0 }}>{meal.description || "—"}</p>

            <div style={{ marginTop: 16 }}>
                <span
                style={
                    meal.isDiet ? styles.badgeSuccess : styles.badgeDanger
                }
                >
                {meal.isDiet ? "Dentro da dieta" : "Fora da dieta"}
                </span>
            </div>

            <div
                style={{
                marginTop: 18,
                display: "flex",
                gap: 10,
                }}
            >
                <a
                style={styles.editLink}
                href={`/meals/${meal.id}/edit`}
                >
                Editar
                </a>

                <button
                onClick={handleDelete}
                style={{ ...styles.button, background: "#ef4444" }}
                >
                Excluir
                </button>

                <button
                onClick={() => (window.location.href = "/dashboard")}
                style={{ ...styles.button, background: "#6b7280" }}
                >
                Voltar
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}
