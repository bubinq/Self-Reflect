import { createContext, ReactElement, useState } from "react";

export const AuthContext = createContext({
    user: {},
    setUser: (user: object) => {},
});

export const UserProvider = ({ children }: { children: ReactElement }) => {
    const [user, setUser] = useState({});
    return (
        <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
    )
}