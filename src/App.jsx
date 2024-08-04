import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Movie from "./pages/Movie/Movie"
import  Header  from "./components/Header/Header"


const App = () => {
  return (
    <div className="body">
      <div className="project">
        <img className="bc-img" src="../public/img/bc.jpeg" alt="" />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;
