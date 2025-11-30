import React, { useState, useContext } from "react";
import { styles } from "./styles";
import Navbar from "../../Components/Navbar/Navbar";
import { ToastContext } from "../../Context/ToastContext";

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const { toast } = useContext(ToastContext);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!form.name || !form.email || !form.password) {
        toast("Preencha todos os campos.", "error");
        return;
        }

        try {
        const res = await fetch("http://localhost:3333/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (!res.ok) {
            toast(data.error || "Erro ao cadastrar", "error");
            return;
        }

        toast("Conta criada com sucesso!", "success");

        setTimeout(() => {
            window.location.href = "/login";
        }, 1000);

        } catch (err) {
        toast("Erro de conexão com o servidor", "error");
        }
    }

    return (
        <div style={styles.page}>
        <Navbar active="register" />

        <div style={styles.centerArea}>
            <h2 style={styles.title}>Criar Conta</h2>

            <form onSubmit={handleSubmit} style={styles.formBox}>
            <input
                style={styles.input}
                placeholder="Nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
                style={styles.input}
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
                style={styles.input}
                placeholder="Senha"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button style={styles.button} type="submit">Cadastrar</button>

            <a href="/login" style={styles.registerLink}>
                Já tem conta? Faça login
            </a>
            </form>
        </div>
        </div>
    );
}
