import React, { createContext, useState, useEffect } from "react";
import { api } from "../Services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const raw = localStorage.getItem("daily:user");
        return raw ? JSON.parse(raw) : null;
    });

    useEffect(() => {
        // keep token in localStorage; no extra setup needed for fetch wrapper
    }, []);

    function login(token, userObj) {
        localStorage.setItem("daily:token", token);
        localStorage.setItem("daily:user", JSON.stringify(userObj));
        setUser(userObj);
    }

    function logout() {
        localStorage.removeItem("daily:token");
        localStorage.removeItem("daily:user");
        setUser(null);
        window.location.href = "/login";
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, api }}>
        {children}
        </AuthContext.Provider>
    );
}
