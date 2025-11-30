import React, { useContext } from "react";
import { styles } from "./styles";
import { AuthContext } from "../../Context/AuthContext";

export default function Navbar({ active }) {
    const { user } = useContext(AuthContext);

    return (
        <header style={styles.navbar}>
        <div style={styles.logo}>DailyDiet</div>

        <nav style={styles.navLinks}>
            <a style={active === "inicio" ? styles.active : styles.link} href="/">Início</a>
            <a style={active === "noticias" ? styles.active : styles.link} href="/news">Notícias</a>

            {!user && (
            <>
                <a href="/register" style={active === "register" ? styles.navButtonActive : styles.navButton}>
                Cadastrar
                </a>

                <a href="/login" style={active === "login" ? styles.navButtonActive : styles.navButton}>
                Login
                </a>
            </>
            )}

            {user && (
            <>
                <a style={active === "dashboard" ? styles.active : styles.link} href="/dashboard">
                Dashboard
                </a>

                <a style={styles.logoutButton} href="#" onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
                }}>
                Sair
                </a>
            </>
            )}
        </nav>
        </header>
    );
}
