import { useState } from 'react';
import './Header.css';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import logo from "../../assets/logo.png";
import { useAuth } from '../../context/authContext';
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/themeContext';


const Header = () => {
    const { auth, setAuth } = useAuth()
    const { toggle, changeTheme } = useTheme()

    const navigate = useNavigate()

    const changePage = () => {
        setAuth(false)
        navigate(-1)
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
                        <button onClick={changeTheme}
                            style={toggle ?
                                { border: "1px solid white", color: "white" }
                                :
                                { border: "1px solid black", color: "black" }
                            }
                        >
                            {toggle ? <BsSunFill /> : <BsMoonFill />}
                        </button>
                        {auth &&
                            <button onClick={changePage}
                                style={toggle ?
                                    { border: "1px solid white", color: "white" }
                                    :
                                    { border: "1px solid black", color: "black" }
                                }
                            >
                                <TbArrowBigRightLinesFilled />
                            </button>
                        }
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;
