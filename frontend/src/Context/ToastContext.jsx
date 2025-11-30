import React, { createContext, useState } from "react";
import Toast from "../Components/Toast/Toast";

export const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    function toast(message, type = "success") {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
    }

    function removeToast(id) {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }

    return (
        <ToastContext.Provider value={{ toast }}>
        {children}

        {toasts.map((t) => (
            <Toast
            key={t.id}
            message={t.message}
            type={t.type}
            onClose={() => removeToast(t.id)}
            />
        ))}
        </ToastContext.Provider>
    );
}
