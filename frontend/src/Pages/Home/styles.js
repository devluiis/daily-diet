export const styles = {
    page: {
        background: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        padding: "0 40px",
    },

    /* NAVBAR --------------------------------------------------- */
    navbar: {
        width: "100%",
        padding: "20px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    logo: {
        fontSize: "28px",
        fontWeight: "700",
        color: "#e91e63",
    },

    navLinks: {
        display: "flex",
        alignItems: "center",
        gap: "28px",
    },

    navLink: {
        fontSize: "16px",
        color: "#444",
        textDecoration: "none",
        cursor: "pointer",
    },

    navButton: {
        padding: "10px 18px",
        borderRadius: "8px",
        background: "#e91e63",
        color: "#fff",
        textDecoration: "none",
        fontWeight: "600",
    },

    /* HERO ----------------------------------------------------- */
    hero: {
        marginTop: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
    },

    heroText: {
        maxWidth: "480px",
    },

    title: {
        fontSize: "48px",
        fontWeight: "700",
        color: "#e91e63",
        marginBottom: "10px",
    },

    subtitle: {
        fontSize: "18px",
        color: "#555",
        marginBottom: "24px",
        lineHeight: "1.5",
    },

    ctaButton: {
        padding: "14px 24px",
        borderRadius: "10px",
        background: "#e91e63",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "600",
        border: "none",
        cursor: "pointer",
    },

    heroImageContainer: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
    },

    heroImage: {
        width: "100%",
        borderRadius: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },
};
