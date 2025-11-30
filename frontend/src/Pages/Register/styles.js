export const styles = {
    page: {
        background: "#ffffff",
        minHeight: "100vh",
        padding: "0 40px",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
    },

    /* NAV */
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

    /* BODY */
    centerArea: {
        marginTop: "40px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    title: {
        fontSize: "32px",
        color: "#e91e63",
        fontWeight: "700",
        marginBottom: "20px",
    },

    formBox: {
        background: "#fff",
        padding: "32px",
        borderRadius: "16px",
        width: "380px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
    },

    input: {
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        fontSize: "15px",
    },

    button: {
        padding: "12px",
        borderRadius: "8px",
        background: "#e91e63",
        border: "none",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        marginTop: "10px",
    },

    error: {
        marginTop: "10px",
        color: "red",
        fontSize: "14px",
        textAlign: "center",
    },
    success: {
        marginTop: "10px",
        color: "#10b981", 
        fontSize: "14px",
        textAlign: "center",
        fontWeight: "600",
    },

};
