import React, {useState} from 'react';
import "./Navbar.css";
import logo from './Assets/logo.png';

const Navbar = () => {
    const [showList, setShowList] = useState(false);
        return (
            <nav className="main-nav">
                <div className="logo">
                    <img alt="img" src={logo} />
                </div>

                <div className= {showList ? "mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li className="menu-link-item">
                            <a href="https://google.com" className="menu-item">About</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="https://google.com" className="menu-item">Academics</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="https://google.com" className="menu-item">Achievements</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="https://google.com" className="menu-item">Life&nbsp;at&nbsp;IITR</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="https://google.com" className="menu-item">Placements</a>
                        </li>
                    </ul>                    
                </div>

                <div className="Discussion-forum">
                <a href="https://google.com" target="_blank" rel="noreferrer">
                    <button class="primary" className="Discussion-forum-button">
                        Join&nbsp;the&nbsp;Discussion&nbsp;forum
                    </button>
                </a>
                </div>
                <div className="List-menu" onClick={() => setShowList(!showList)}>
                    <i class="bars icon"></i>
                </div>
            </nav>
        )
}


export default Navbar;
