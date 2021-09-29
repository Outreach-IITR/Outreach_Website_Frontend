import React, { Component } from 'react';
import "./Navbar.css";
import logo from './Assets/logo.png';

export class Navbar extends Component {
    render() {
        return (
            <nav className="main-nav">
                <div className="logo">
                    <img alt="img" src={logo} />
                </div>

                <div className="menu-link">
                    <ul>
                        <li className="menu-link-item">
                            <a href="https://google.com">About</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="https://google.com">Academics</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="https://google.com">Achievements</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="https://google.com" style={{}}>Life at IITR</a>
                        </li>
                        <li className="menu-link-item">
                            <a href="https://google.com">Placements</a>
                        </li>
                    </ul>                    
                </div>

                <div className="Discussion-forum">
                <a href="https://google.com" target="_blank" rel="noreferrer">
                    <button class="primary" className="Discussion-forum-button">
                        Join the Discussion forum
                    </button>
                </a>
                </div>
            </nav>
        )
    }
}

export default Navbar;
