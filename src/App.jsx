import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Movie from "./pages/Movie/Movie"
import Error from "./pages/Error/Error"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { useTheme } from "./context/themeContext"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Login from "./pages/Login/Login"


const App = () => {
    const { toggle } = useTheme()
    return (
        <div className="app"
            style={toggle ?
                { backgroundColor: "black" }
                : { backgroundColor: "white" }
            }>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/movie" element={<Movie />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </div >
    )
}

export default App;
