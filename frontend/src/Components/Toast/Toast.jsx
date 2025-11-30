import React, { useEffect } from "react";
import { styles } from "./styles";

export default function Toast({ message, type, onClose }) {

    useEffect(() => {
        const timer = setTimeout(() => onClose(), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{
        ...styles.toast,
        ...(type === "error" ? styles.error : styles.success)
        }}>
        {message}
        </div>
    );
}
