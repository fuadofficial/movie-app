import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const ThemeContext = ({ children }) => {
    const [toggle, setToggle] = useState(true);

    const changeTheme = () => {
        setToggle(!toggle)
    }    

    return (
        <AuthContext.Provider value={{ toggle, setToggle, changeTheme }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(AuthContext)
}