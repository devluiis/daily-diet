import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { styles } from "./styles";
import { api } from "../../Services/api";
import { AuthContext } from "../../Context/AuthContext";

export default function Metrics() {
    const { logout } = useContext(AuthContext);
    const [metrics, setMetrics] = useState(null);

    useEffect(() => {
        async function load() {
        try {
            const res = await api.get("/metrics");
            setMetrics(res);
        } catch (e) {
            if (e.status === 401) return logout();
            alert("Erro ao buscar métricas");
            window.location.href = "/dashboard";
        }
        }
        load();
    }, []);

    if (!metrics) return (
        <div style={styles.page}>
        <Navbar active="dashboard" />
        <div style={{padding:40}}>Carregando...</div>
        </div>
    );

    return (
        <div style={styles.page}>
        <Navbar active="dashboard" />
        <div style={styles.main}>
            <h1 style={styles.title}>Métricas</h1>

            <div style={styles.grid}>
            <div style={styles.metricCard}>
                <div style={styles.metricLabel}>Total de refeições</div>
                <div style={styles.metricValue}>{metrics.totalMeals}</div>
            </div>

            <div style={styles.metricCard}>
                <div style={styles.metricLabel}>Dentro da dieta</div>
                <div style={styles.metricValue}>{metrics.mealsInDiet}</div>
            </div>

            <div style={styles.metricCard}>
                <div style={styles.metricLabel}>Fora da dieta</div>
                <div style={styles.metricValue}>{metrics.mealsOutDiet}</div>
            </div>

            <div style={styles.metricCard}>
                <div style={styles.metricLabel}>Melhor sequência</div>
                <div style={styles.metricValue}>{metrics.bestSequence}</div>
            </div>
            </div>

            <div style={{marginTop:20}}>
            <button style={styles.button} onClick={() => window.location.href="/dashboard"}>Voltar</button>
            </div>
        </div>
        </div>
    );
}
