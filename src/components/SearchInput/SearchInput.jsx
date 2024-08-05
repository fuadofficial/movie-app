import React from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchInput.css'

const SearchInput = () => {
    return (
        <div className='search-container'>
            <div className="input">
                <FaSearch className='search-icon' />
                <input type="text" placeholder='Search your movies...' />
            </div>
        </div>
    )
}

export default SearchInput