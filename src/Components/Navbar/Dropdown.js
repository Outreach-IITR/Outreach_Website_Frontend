import React, { useState } from 'react';
import "./Navbar.css";
import {MenuItems} from './MenuItems'
import './Dropdown.css'
import { NavLink } from 'react-router-dom';

const Dropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    return(
        <>
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((items, index) => {
                return(
                <li key={index}>
                    <NavLink
                       className={items.cName} 
                       activeClassName="active-page"
                       to={items.path} 
                       onClick={() => setClick(false)}
                    >
                        {items.title}
                    </NavLink>
                </li>)
            })}
        </ul>


        </>
    );
};

export default Dropdown;