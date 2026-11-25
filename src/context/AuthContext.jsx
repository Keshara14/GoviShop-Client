/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);
const API_URL = "http://localhost:5000/api";

const readResponse = async (response, fallbackMessage) => {
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        throw new Error("The backend server is not running. Start the server on port 5000 and try again.");
    }

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || fallbackMessage);
    }

    return data;
};

export function AuthProvider({ children }) {
    const [session, setSession] = useState(() => {
        const savedSession = localStorage.getItem("govishop-session");
        return savedSession ? JSON.parse(savedSession) : null;
    });

    const login = async (email, password) => {
        let response;
        try {
            response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
        } catch {
            throw new Error("Cannot reach the server. Start GoviShop backend on port 5000 and try again.");
        }
        const data = await readResponse(response, "Unable to log in");

        localStorage.setItem("govishop-session", JSON.stringify(data));
        setSession(data);
        return data;
    };

    const register = async (account) => {
        let response;
        try {
            response = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(account)
            });
        } catch {
            throw new Error("Cannot reach the server. Start GoviShop backend on port 5000 and try again.");
        }
        const data = await readResponse(response, "Unable to create account");

        return data;
    };

    const logout = () => {
        localStorage.removeItem("govishop-session");
        localStorage.removeItem("govishop-role");
        setSession(null);
    };

    const value = useMemo(() => ({
        session,
        user: session?.user || null,
        token: session?.token || null,
        isAuthenticated: Boolean(session?.token),
        login,
        register,
        logout
    }), [session]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
}
