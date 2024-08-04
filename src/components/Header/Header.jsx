import { useState } from 'react';
import './Header.css';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Header = () => {
    const [toggle, setToggle] = useState(true);

    const toggleDarkMode = () => {
        console.log("button clicked ", toggle);
        setToggle(!toggle);
    }

    return (
        <header>
            <div className="header">
                <div className="left">
                    <div className="movie-img">
                        <img src="/img/movie icon.png" alt="Movie Icon" />
                    </div>
                    <div className="movie-name">
                        <h1>MovieHub</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="toggle-btn-dark">
                        <button onClick={toggleDarkMode}>
                            {toggle ? <BsSunFill /> : <BsMoonFill />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
