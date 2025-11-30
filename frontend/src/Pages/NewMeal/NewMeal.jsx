import React, { useState, useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { styles } from "./styles";
import { api } from "../../Services/api";
import { AuthContext } from "../../Context/AuthContext";
import { ToastContext } from "../../Context/ToastContext";

export default function NewMeal() {
    const [form, setForm] = useState({ name: "", description: "", datetime: "", isDiet: true });
    const { logout } = useContext(AuthContext);
    const { toast } = useContext(ToastContext);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!form.name || !form.datetime) {
            toast("Nome e data/hora são obrigatórios", "error");
            return;
        }

        try {
            await api.post("/meals", form);

            toast("Refeição criada com sucesso!", "success");

            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 800);

        } catch (err) {
            if (err.status === 401) return logout();
            toast("Erro ao criar refeição", "error");
        }
    }

    return (
        <div style={styles.page}>
            <Navbar active="dashboard" />

            <div style={styles.main}>
                <h1 style={styles.title}>Nova Refeição</h1>

                <form style={styles.form} onSubmit={handleSubmit}>
                    <input
                        style={styles.input}
                        placeholder="Nome"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                    />

                    <textarea
                        style={styles.textarea}
                        placeholder="Descrição"
                        value={form.description}
                        onChange={e => setForm({ ...form, description: e.target.value })}
                    />

                    <input
                        type="datetime-local"
                        style={styles.input}
                        value={form.datetime}
                        onChange={e => setForm({ ...form, datetime: e.target.value })}
                    />

                    <div style={styles.radioBox}>
                        <label>
                            <input
                                type="radio"
                                checked={form.isDiet}
                                onChange={() => setForm({ ...form, isDiet: true })}
                            />
                            Dentro da dieta
                        </label>

                        <label>
                            <input
                                type="radio"
                                checked={!form.isDiet}
                                onChange={() => setForm({ ...form, isDiet: false })}
                            />
                            Fora da dieta
                        </label>
                    </div>

                    {/* CORREÇÃO AQUI */}
                    <button type="submit" style={styles.button}>
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    );
}
