import React, { useState, useContext } from "react";
import { styles } from "./styles";
import { AuthContext } from "../../Context/AuthContext";
import Navbar from "../../Components/Navbar/Navbar";
import { ToastContext } from "../../Context/ToastContext";

export default function Login() {
    const { login } = useContext(AuthContext);
    const { toast } = useContext(ToastContext); // TOAST ATIVO
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
        toast("Preencha todos os campos.", "error");
        return;
        }

        try {
        const res = await fetch("http://localhost:3333/sessions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            toast(data.error || "Erro ao fazer login", "error");
            return;
        }

        toast("Login realizado com sucesso!", "success");
        login(data.token, data.user);

        setTimeout(() => {
            window.location.href = "/dashboard";
        }, 1000);

        } catch (err) {
        toast("Erro de conexão com o servidor", "error");
        }
    }

    return (
        <div style={styles.page}>
        <Navbar active="login" />

        <div style={styles.centerArea}>
            <h2 style={styles.title}>Entrar</h2>

            <form onSubmit={handleSubmit} style={styles.formBox}>
            <input
                style={styles.input}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                style={styles.input}
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button style={styles.button} type="submit">
                Entrar
            </button>

            <a href="/register" style={styles.registerLink}>
                Criar uma conta
            </a>
            </form>
        </div>
        </div>
    );
}
