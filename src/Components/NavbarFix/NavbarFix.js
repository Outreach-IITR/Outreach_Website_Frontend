import React, {useState, useEffect} from 'react';
import "./NavbarFix.css";
import logo from './Assets/logo.svg';
import Dropdown from '../Navbar/Dropdown';
import { NavLink } from 'react-router-dom';


const NavbarFix = () => {
    
    const [showList, setShowList] = useState(false);
    const [navbar, setHeader] = useState("main-nav1")
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

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
                <NavLink to ='/' className="logo">
                    <img alt="img" src={logo} />
                </NavLink>

                <div className= {showList ? "mobile-menu-link" : "menu-link"}>
                    <ul className="menu-link-ul">
                        <li className="menu-link-item">
                            <NavLink to ="/about" activeClassName="active-page" className="menu-item">About</NavLink>
                        </li>
                        <li className="menu-link-item">
                            <NavLink to="/academics" activeClassName="active-page" className="menu-item">Academics</NavLink>
                        </li>
                        <li className="menu-link-item">
                            <NavLink to="/achievements" activeClassName="active-page" className="menu-item">Achievements</NavLink>
                        </li>
                        <li className="menu-link-item">
                            <NavLink to="/lifeatiitr" activeClassName="active-page" className="menu-item">Life&nbsp;at&nbsp;IITR</NavLink>
                        </li>
                        <li className="menu-link-item" id="nav-placements" 
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <NavLink to="/placements/2020-21" className="menu-item" >Placements</NavLink>
                        <div id="nav-placments-item">{dropdown && <Dropdown/>}</div>
                    </li>
                    </ul>      
                </div>

                <div className="Discussion-forum">
                <a href="https://www.facebook.com/groups/255334742446066/?ref=share" target="_blank" rel="noreferrer">
                    <button id="join_button" className={showList ? "Discussion-forum-button" : "Discussion-forum-button-list Discussion-forum-button"}>
                        Join&nbsp;the&nbsp;Discussion&nbsp;forum
                    </button>
                </a>
                </div>
                <div className="List-menu" onClick={() => setShowList(!showList)}>
                    <i className={showList ? "times icon List-menu-icon" : "chevron down icon List-menu-icon"} ></i>
                </div>
            </nav>
        )
}


export default NavbarFix;