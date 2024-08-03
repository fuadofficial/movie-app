import { useState } from 'react';
import './Header.css'
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const Header = () => {
    const [toggel, setToggel] = useState(false)

    return (
        <header>
            <div className="header">
                <div className="left">
                    <div className="movie-img">
                        <img src="../../../public/img/movie icon.png" alt="" />
                    </div>
                    <div className="movie-name">
                        <h1>MovieHub</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="toggle-btn-dark">
                        {toggel ?
                            <button className='light' onClick={() => setToggel(true)}><CiLight /></button>
                            : <button className='dark' onClick={() => setToggel(false)}><FaMoon /></button>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
