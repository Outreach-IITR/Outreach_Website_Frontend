import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import AboutIITR from "./AboutIITR";
import AboutOutreach from "./AboutOutreach";
import OurTeam from "./OurTeam";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AboutIITR />
        <AboutOutreach />
        <OurTeam />
      </div>
    );
  }
}

export default App;
