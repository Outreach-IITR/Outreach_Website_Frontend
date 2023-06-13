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
        <Background  heading="About Us" text="Here's a glimpse of Asia's oldest technical institution, which has strived to help students explore their potential beyond par." />
        <AboutIITR />
        <AboutOutreach />
        <OurTeam />
      </div>
    );
  }
}

export default About;
