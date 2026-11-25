/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

const RoleContext = createContext(null);

export function RoleProvider({ children }) {
    const [role, setRole] = useState(() => {
        const savedRole = localStorage.getItem("govishop-role");
        return savedRole === "customer" ? "buyer" : savedRole || "farmer";
    });

    const changeRole = (nextRole) => {
        setRole(nextRole);
        localStorage.setItem("govishop-role", nextRole);
    };

    const value = useMemo(() => ({ role, changeRole }), [role]);

    return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
    const context = useContext(RoleContext);
    if (!context) {
        throw new Error("useRole must be used inside RoleProvider");
    }
    return context;
}
