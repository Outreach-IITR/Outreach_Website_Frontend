import React, { Component } from "react";
import AboutIITR from "./AboutIITR";
import AboutOutreach from "./AboutOutreach";
import OurTeam from "./OurTeam";
import NavbarFix from "../NavbarFix/NavbarFix";
import Background from "../Background/Background";

class About extends Component {
  render() {
    return (
      <div>
        <NavbarFix/>
        <Background  heading="About Us" text="Lacus elementum blandit venenatis faucibus vulputate ultrices blandit euismod." />
        <AboutIITR />
        <AboutOutreach />
        <OurTeam />
      </div>
    );
  }
}

export default About;
