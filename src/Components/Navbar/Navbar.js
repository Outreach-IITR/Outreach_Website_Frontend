import React, { useState } from 'react';
import "./Navbar.css";
import logo from './Assets/logo.svg';
import { NavLink } from 'react-router-dom';

import Dropdown from './Dropdown'

const Navbar = () => {
    
    const [showList, setShowList] = useState(false);
    
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
    return (
        <nav className="main-nav">
            <a href='/' className="logo">
                <img alt="img" src={logo} />
            </a>

            <div className={showList ? "mobile-menu-link" : "menu-link"}>
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
                        <NavLink to="/placements/2020-21" activeClassName="active-page" className="menu-item" >Placements</NavLink>
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
                <i className={showList ? "chevron up icon List-menu-icon" : "chevron down icon List-menu-icon"} ></i>
            </div>
        </nav>
    )
}


export default Navbar;
