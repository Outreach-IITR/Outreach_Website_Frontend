import React, {useState} from 'react';
import "./Navbar.css";
import logo from './Assets/logo.svg';

const Navbar = () => {
    const [showList, setShowList] = useState(false);
        return (
            <nav className="main-nav">
                <div className="logo">
                    <img alt="img" src={logo} />
                </div>

                <div className= {showList ? "mobile-menu-link" : "menu-link"}>
                    <ul className="menu-link-ul">
                        <li className="menu-link-item">
                            <a href="/about" className="menu-item">About</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="/" className="menu-item">Academics</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="/" className="menu-item">Achievements</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="/" className="menu-item">Life&nbsp;at&nbsp;IITR</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="/" className="menu-item">Placements</a>
                        </li>
                    </ul>      
                </div>

                <div className="Discussion-forum">
                <a href="/" target="_blank" rel="noreferrer">
                    <button id="join_button" className={showList ? "Discussion-forum-button" : "Discussion-forum-button-list Discussion-forum-button"}>
                        Join&nbsp;the&nbsp;Discussion&nbsp;forum
                    </button>
                </a>
                </div>
                <div className="List-menu" onClick={() => setShowList(!showList)}>
                    <i className={showList ? "chevron up icon List-menu-icon" : "chevron down icon List-menu-icon"} ></i>
                </div>
            </nav>
        )
}


export default Navbar;
