import React, { Component } from "react";
import "./Footer.css";
import facebook from "./Assets/facebook.svg";
import linkedin from "./Assets/linkedin.svg";
import outreach_logo from "./Assets/outreach_logo.svg";
import twitter from "./Assets/twitter.svg";
import youtube from "./Assets/youtube.svg";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="section-one">
        <div className="flex-item-left quick-links-div">
          <h3 id="footer-quick-links">Quick&#160;Links</h3>
          <ul className="footer-column">
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Lorem Ipsum
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Lorem ipsum 22
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Testing Lorem
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Lorem Ipsum
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-item-left academics-div">
          <h3 id="footer-academics">Academics</h3>
          <ul className="footer-column">
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Departments
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Lorem ipsum 22
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-two">
        <div className="flex-item-left life-div">
          <h3 id="footer-life">Life&#160;at&#160;IIT&#160;R</h3>
          <ul className="footer-column">
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Lorem Ipsum
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Lorem ipsum 22
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Testing Lorem
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Lorem Ipsum
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-item-left about-us-div">
          <h3 id="footer-about-us">About&#160;Us</h3>
          <ul className="footer-column">
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                About&#160;Outreach
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                About&#160;IIT&#160;Roorkee
              </a>
            </li>
            <li className="footer-column-item">
              <a href="/" className="footer-item">
                Outreach&#160;Team
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-three">
        <div className="right-section">
          <img alt="img" id="outreach_logo" src={outreach_logo} />
          <div className="icons icons-mobile-view">
            <a href="/" target="_blank" rel="noreferrer">
              <img alt="img" src={facebook} />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <img alt="img" src={twitter} />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <img alt="img" src={linkedin} />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <img alt="img" src={youtube} />
            </a>
          </div>
          <p className="footer-right-text">
            <br />
            +91&#160;0123456789
            <br />
            <br />
            outrach@iitr.ac.in
            <br />
            <br />
            SAC Building, IIT Roorkee,
            <br />
            Roorkee, Uttrakhand, India - 247667
          </p>
          <div className="icons icons-desktop-view">
            <a href="/" target="_blank" rel="noreferrer">
              <img alt="img" src={facebook} />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <img alt="img" src={twitter} />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <img alt="img" src={linkedin} />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <img alt="img" src={youtube} />
            </a>
          </div>
          <p className="footer-right-text" id="copy-right">
            <br />
            2021 Copyright, All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
