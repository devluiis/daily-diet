import React from "react";
import { styles } from "./styles";

export default function News() {
    const posts = [
        {
        title: "Como manter uma dieta equilibrada",
        desc: "Aprenda os fundamentos de uma dieta saudável e sustentável.",
        img: "https://images.unsplash.com/photo-1556911220-e15b29be8cbd",
        },
        {
        title: "Os benefícios das frutas no dia a dia",
        desc: "Veja como frutas podem melhorar sua saúde e energia.",
        img: "https://images.unsplash.com/photo-1572441710534-680f8b80a8bd",
        },
        {
        title: "Como criar hábitos alimentares saudáveis",
        desc: "Pequenas ações que transformam o seu bem-estar.",
        img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        },
    ];

    return (
        <div style={styles.page}>
        {/* NAV */}
        <header style={styles.navbar}>
            <div style={styles.logo}>DailyDiet</div>

            <nav style={styles.navLinks}>
            <a style={styles.navLink} href="/">Início</a>
            <a style={styles.navActive}>Notícias</a>
            <a style={styles.navButton} href="/login">Login</a>
            </nav>
        </header>

        {/* TITLE */}
        <h1 style={styles.title}>Notícias e Artigos</h1>
        <p style={styles.subtitle}>Conteúdos sobre alimentação e bem-estar.</p>

        {/* POSTS */}
        <div style={styles.postsGrid}>
            {posts.map((p, i) => (
            <div key={i} style={styles.card}>
                <img src={p.img} alt={p.title} style={styles.cardImg} />
                <h3 style={styles.cardTitle}>{p.title}</h3>
                <p style={styles.cardDesc}>{p.desc}</p>
            </div>
            ))}
        </div>
        </div>
    );
}
