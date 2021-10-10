import React, { Component } from "react";
import AboutIITR from "./AboutIITR";
import AboutOutreach from "./AboutOutreach";
import OurTeam from "./OurTeam";
import NavbarFix from "../NavbarFix/NavbarFix";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarFix />
        <AboutIITR />
        <AboutOutreach />
        <OurTeam />
      </div>
    );
  }
}

export default App;
