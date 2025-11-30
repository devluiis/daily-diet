import React from "react";
import { styles } from "./styles";

export default function Home() {
    return (
        <div style={styles.page}>
        {/* NAVBAR */}
        <header style={styles.navbar}>
            <div style={styles.logo}>DailyDiet</div>

            <nav style={styles.navLinks}>
            <a style={styles.navLink} href="/">Início</a>
            <a style={styles.navLink} href="/news">Notícias</a>
            <a style={styles.navButton} href="/login">Login</a>
            </nav>
        </header>

        {/* HERO */}
        <section style={styles.hero}>
            <div style={styles.heroText}>
            <h1 style={styles.title}>Alimentação saudável</h1>
            <p style={styles.subtitle}>
                Cada refeição conta. <br /> Gerencie sua dieta diária de forma prática e eficiente.
            </p>

            <button style={styles.ctaButton}>
                Começar agora
            </button>
            </div>

            <div style={styles.heroImageContainer}>
            <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                alt="Comida saudável"
                style={styles.heroImage}
            />
            </div>
        </section>
        </div>
    );
}
