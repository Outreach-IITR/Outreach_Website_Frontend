import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import AboutOutreach from "./AboutOutreach";
import OurTeam from "./OurTeam";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AboutOutreach />
        <OurTeam />
      </div>
    );
  }
}

export default App;
