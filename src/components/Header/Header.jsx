import { useState } from 'react';
import './Header.css';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import logo from "../../assets/logo.png";

const Header = () => {
    const [toggle, setToggle] = useState(true);

    const toggleDarkMode = () => {
        setToggle(!toggle);
    }

    return (
        <header>
            <div className="header">
                <div className="left">
                    <div className="movie-img">
                        <img src={logo} alt="Movie Icon" />
                    </div>
                    <div className="movie-name">
                        <h1>MOVIE WORLD</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="toggle-btn-dark">
                        <button onClick={toggleDarkMode}>
                            {toggle ? <BsMoonFill /> : <BsSunFill />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
