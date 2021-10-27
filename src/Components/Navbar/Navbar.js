import React, { useState } from "react";
import "./Navbar.css";
import logo from "./Assets/logo.svg";

import Dropdown from "./Dropdown";

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

  const pathname = window.location.pathname;
  return (
    <nav className="main-nav">
      <a href="/" className="logo">
        <img alt="img" src={logo} />
      </a>

      <div className={showList ? "mobile-menu-link" : "menu-link"}>
        <ul className="menu-link-ul">
          <li className="menu-link-item">
            <a
              href="/about"
              className={`menu-item ${
                pathname.slice(0, 6) === "/about" ? "active-page" : ""
              } `}
            >
              About
            </a>
          </li>
          <li className="menu-link-item">
            <a
              href="/academics"
              className={`menu-item ${
                pathname.slice(0, 10) === "/academics" ? "active-page" : ""
              } `}
            >
              Academics
            </a>
          </li>
          <li className="menu-link-item">
            <a
              href="/achievements"
              className={`menu-item ${
                pathname.slice(0, 13) === "/achievements" ? "active-page" : ""
              } `}
            >
              Achievements
            </a>
          </li>
          <li className="menu-link-item">
            <a
              href="/lifeatiitr"
              className={`menu-item ${
                pathname.slice(0, 11) === "/lifeatiitr" ? "active-page" : ""
              } `}
            >
              Life&nbsp;at&nbsp;IITR
            </a>
          </li>
          <li
            className="menu-link-item"
            id="nav-placements"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a
              href="/placements/2020-21"
              className={`menu-item ${
                pathname.slice(0, 11) === "/placements" ? "active-page" : ""
              } `}
            >
              Placements
            </a>
            <div id="nav-placments-item">{dropdown && <Dropdown />}</div>
          </li>
        </ul>
      </div>

      <div className="Discussion-forum">
        <a
          href="https://www.facebook.com/groups/255334742446066/?ref=share"
          target="_blank"
          rel="noreferrer"
        >
          <button
            id="join_button"
            className={
              showList
                ? "Discussion-forum-button"
                : "Discussion-forum-button-list Discussion-forum-button"
            }
          >
            Join&nbsp;the&nbsp;Discussion&nbsp;forum
          </button>
        </a>
      </div>
      <div className="List-menu" onClick={() => setShowList(!showList)}>
        <i
          className={
            showList
              ? "chevron up icon List-menu-icon"
              : "chevron down icon List-menu-icon"
          }
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
