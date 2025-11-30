import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "../Context/AuthContext";
import { ToastProvider } from "../Context/ToastContext";

import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import NewMeal from "../Pages/NewMeal/NewMeal";
import EditMeal from "../Pages/EditMeal/EditMeal";
import Meal from "../Pages/Meal/Meal";
import Metrics from "../Pages/Metrics/Metrics";

function Private({ children }) {
    const { user } = React.useContext(AuthContext);
    return user ? children : <Navigate to="/login" />;
    }

    export default function AppRoutes() {
    return (
        <ToastProvider>
        <AuthProvider>
            <BrowserRouter>

            <Routes>

                {/* HOME inteligente (logado vai para dashboard) */}
                <Route 
                path="/" 
                element={
                    <HomeRouter />
                } 
                />

                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* ROTAS PRIVADAS */}
                <Route 
                path="/dashboard" 
                element={<Private><Dashboard /></Private>} 
                />

                <Route 
                path="/meals/new" 
                element={<Private><NewMeal /></Private>} 
                />

                <Route 
                path="/meals/:id/edit" 
                element={<Private><EditMeal /></Private>} 
                />

                <Route 
                path="/meals/:id" 
                element={<Private><Meal /></Private>} 
                />

                <Route 
                path="/metrics" 
                element={<Private><Metrics /></Private>} 
                />

                <Route 
                path="*" 
                element={<div style={{padding:20}}>Página não encontrada</div>} 
                />
            </Routes>

            </BrowserRouter>
        </AuthProvider>
        </ToastProvider>
    );
    }

    /* Função que melhora a rota "/" */
    function HomeRouter() {
    const { user } = React.useContext(AuthContext);
    return user ? <Navigate to="/dashboard" /> : <Home />;
}
