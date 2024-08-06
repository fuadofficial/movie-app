import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Movie from "./pages/Movie/Movie"
import Error from "./pages/Error/Error"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { useTheme } from "./context/themeContext"


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
                    <Route path="/" element={<Home />} />
                    <Route path="/movie" element={<Movie />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </div >
    )
}

export default App;
