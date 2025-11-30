export const styles = {
    page: {
        background: "#ffffff",
        minHeight: "100vh",
        padding: "0 40px",
        fontFamily: "Inter, sans-serif",
    },

    navbar: {
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
        gap: "28px",
        alignItems: "center",
    },

    navLink: {
        color: "#444",
        textDecoration: "none",
        fontSize: "16px",
    },

    navActive: {
        color: "#e91e63",
        fontWeight: "600",
        borderBottom: "2px solid #e91e63",
        paddingBottom: "4px",
    },

    navButton: {
        padding: "10px 18px",
        background: "#e91e63",
        color: "#fff",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "600",
    },

    title: {
        marginTop: "40px",
        fontSize: "40px",
        fontWeight: "700",
        color: "#e91e63",
    },

    subtitle: {
        fontSize: "18px",
        color: "#666",
        marginBottom: "30px",
    },

    postsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
        marginBottom: "60px",
    },

    card: {
        background: "#fff",
        borderRadius: "16px",
        padding: "16px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
    },

    cardImg: {
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "12px",
        marginBottom: "12px",
    },

    cardTitle: {
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "6px",
    },

    cardDesc: {
        fontSize: "14px",
        color: "#555",
    },
};
