import React from 'react'
import { useAuth } from '../../context/movieContext'
import './SearchList.css'

const SearchList = () => {
    const { movie } = useAuth()
    return (
        <div className='searchlist-container'>
                {movie.map((movie) => (
                    <div className='movie-card' key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
                    </div>
                ))}
        </div>
    )
}

export default SearchList