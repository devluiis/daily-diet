import React, { useEffect, useState, useContext } from "react";
import { styles } from "./styles";
import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../Context/AuthContext";
import { api } from "../../Services/api";

export default function Dashboard() {
    const { logout } = useContext(AuthContext);
    const [meals, setMeals] = useState([]);

    async function loadMeals() {
        try {
        const data = await api.get("/meals");
        setMeals(data);
        } catch (err) {
        if (err.status === 401) logout();
        }
    }

    useEffect(() => {
        loadMeals();
    }, []);

    return (
        <div style={styles.page}>
        <Navbar active="dashboard" />

        <div style={styles.main}>
            <div style={styles.headerRow}>
            <h1 style={styles.title}>Suas Refeições</h1>
            <a href="/meals/new" style={styles.addButton}>Nova Refeição</a>
            </div>

            <div style={styles.list}>
            {meals.length === 0 && <p style={styles.empty}>Nenhuma refeição cadastrada.</p>}

            {meals.map(m => (
                <div key={m.id} style={styles.card}>
                <div>
                    <h3 style={styles.cardTitle}>{m.name}</h3>
                    <p style={styles.cardMeta}>{new Date(m.datetime).toLocaleString()}</p>
                </div>
                <div style={styles.actions}>
                    <a style={styles.link} href={`/meals/${m.id}`}>Detalhes</a>
                    <a style={styles.link} href={`/meals/${m.id}/edit`}>Editar</a>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}
