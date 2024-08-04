import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Movie from "./pages/Movie/Movie"
import Header from "./components/Header/Header"


const App = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie" element={<Movie />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
