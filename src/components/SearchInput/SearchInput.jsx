import React from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchInput.css'
import { useAuth } from '../../context/movieContext';

const SearchInput = () => {
    const { onChangeHandle, inputValue } = useAuth()
    return (
        <div className='search-container'>
            <div className="input">
                <FaSearch className='search-icon' />
                <input value={inputValue} onChange={onChangeHandle} type="text" placeholder='Search your movies...' />
            </div>
        </div>
    )
}

export default SearchInput