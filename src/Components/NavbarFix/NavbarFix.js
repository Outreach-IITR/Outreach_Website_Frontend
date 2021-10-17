import React, {useState, useEffect} from 'react';
import "./NavbarFix.css";
import logo from './Assets/logo.svg';


const NavbarFix = () => {
    
    const [showList, setShowList] = useState(false);
    const [navbar, setHeader] = useState("main-nav1")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 80) {
          return setHeader("main-nav1")
        } else if (window.scrollY > 7) {
          return setHeader("main-nav-fix")
        } 
      }
      
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);

        return (
            <nav className={navbar} id="nav_bg">
                <a href ='/' className="logo">
                    <img alt="img" src={logo} />
                </a>

                <div className= {showList ? "mobile-menu-link" : "menu-link"}>
                    <ul className="menu-link-ul">
                        <li className="menu-link-item">
                            <a href="/about" className="menu-item">About</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="/academics" className="menu-item">Academics</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="/achievements" className="menu-item">Achievements</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="/lifeatiitr" className="menu-item">Life&nbsp;at&nbsp;IITR</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="/placements" className="menu-item">Placements</a>
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


export default NavbarFix;