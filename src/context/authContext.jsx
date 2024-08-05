import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const handleEamil = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (email === "" || password === "") {
            alert("wrong credentials");
        } else {
            setAuth(true);
            navigate("/");
        }
    }

    return (
        <AuthContext.Provider value={{ handleEamil, handlePassword, handleSubmit }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}