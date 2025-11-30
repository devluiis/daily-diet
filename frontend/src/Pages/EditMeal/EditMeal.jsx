import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { styles } from "./styles";
import { api } from "../../Services/api";
import { AuthContext } from "../../Context/AuthContext";
import { ToastContext } from "../../Context/ToastContext";

export default function EditMeal() {
    const { id } = useParams();
    const { logout } = useContext(AuthContext);
    const { toast } = useContext(ToastContext);
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        async function load() {
        try {
            const data = await api.get(`/meals/${id}`);
            const d = new Date(data.datetime);
            const tz = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
            setMeal({ ...data, datetime: tz });
        } catch (err) {
            toast("Refeição não encontrada", "error");
            window.location.href = "/dashboard";
        }
        }
        load();
    }, [id]);

    async function handleUpdate(e) {
        e.preventDefault();

        try {
        await api.put(`/meals/${id}`, {
            name: meal.name,
            description: meal.description,
            datetime: meal.datetime,
            isDiet: meal.isDiet
        });

        toast("Refeição atualizada!", "success");

        setTimeout(() => {
            window.location.href = "/dashboard";
        }, 800);

        } catch (err) {
        toast("Erro ao atualizar refeição", "error");
        }
    }

    async function handleDelete() {
        try {
        await api.del(`/meals/${id}`);
        toast("Refeição excluída!", "success");

        setTimeout(() => {
            window.location.href = "/dashboard";
        }, 800);

        } catch (err) {
        toast("Erro ao excluir refeição", "error");
        }
    }

    if (!meal) return null;

    return (
        <div style={styles.page}>
        <Navbar active="dashboard" />
        <div style={styles.main}>
            <h1 style={styles.title}>Editar Refeição</h1>

            <form style={styles.form} onSubmit={handleUpdate}>
            <input
                style={styles.input}
                value={meal.name}
                onChange={e => setMeal({ ...meal, name: e.target.value })}
            />

            <textarea
                style={styles.textarea}
                value={meal.description || ""}
                onChange={e => setMeal({ ...meal, description: e.target.value })}
            />

            <input
                type="datetime-local"
                style={styles.input}
                value={meal.datetime}
                onChange={e => setMeal({ ...meal, datetime: e.target.value })}
            />

            <div style={styles.radioBox}>
                <label><input type="radio" checked={meal.isDiet} onChange={() => setMeal({ ...meal, isDiet: true })}/> Dentro da dieta</label>
                <label><input type="radio" checked={!meal.isDiet} onChange={() => setMeal({ ...meal, isDiet: false })}/> Fora da dieta</label>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <button style={styles.button} type="submit">Salvar</button>
                <button style={{ ...styles.button, background: "#ef4444" }} onClick={handleDelete} type="button">
                Excluir
                </button>
            </div>

            </form>
        </div>
        </div>
    );
}
