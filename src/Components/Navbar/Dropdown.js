import React, { useState } from 'react';
import "./Navbar.css";
import {MenuItems} from './MenuItems'
import './Dropdown.css'


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
                    <a
                       className={items.cName} 
                       href={items.path} 
                       onClick={() => setClick(false)}
                    >
                        {items.title}
                    </a>
                </li>)
            })}
        </ul>


        </>
    );
};

export default Dropdown;