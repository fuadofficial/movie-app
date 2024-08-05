import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState([])
    const [inputValue, setInputValue] = useState("")

    function onChangeHandle(event) {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        getMovieList()
    }, [inputValue])


    const getMovieList = async () => {
        if (inputValue === "") {
            const res = await axios(
                "https://api.themoviedb.org/3/movie/popular?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1"
            );
            setMovie(res?.data?.results);
        } else {
            const response = await axios(
                "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false",
                { params: { query: inputValue } }
            );
            setMovie(response?.data?.results);
        }
    }

    return (
        <AuthContext.Provider value={{ movie,inputValue, onChangeHandle, setInputValue }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}