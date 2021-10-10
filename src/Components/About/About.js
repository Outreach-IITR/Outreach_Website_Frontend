import React, { Component } from "react";
import AboutIITR from "./AboutIITR";
import AboutOutreach from "./AboutOutreach";
import OurTeam from "./OurTeam";
import NavbarFix from "../NavbarFix/NavbarFix";
import down from "./Assets/down.svg";
import "./About.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarFix />
        <div id="aboutbg">
          <div id="about_data">
            <div id="about_us_head_tag">
              <h1>About Us</h1>
            </div>
            <div id="about_us_head_data">
              <p>
                Lacus elementum blandit venenatis faucibus vulputate ultrices
                blandit euismod.
              </p>
            </div>
            <div id="about_us_head_downsign">
              <img alt="icon" src={down} />
            </div>
          </div>
        </div>
        <AboutIITR />
        <AboutOutreach />
        <OurTeam />
      </div>
    );
  }
}

export default App;
