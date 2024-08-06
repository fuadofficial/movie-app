import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../context/authContext"

const ProtectedRoute = () => {
    const { auth } = useAuth()

    if (!auth) {
        return <Navigate to={'/'} />
    }
    return <Outlet />
}

export default ProtectedRoute