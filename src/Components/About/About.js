import React, { Component } from "react";

import OurTeam from "./OurTeam";
import NavbarFix from "../NavbarFix/NavbarFix"

class App extends Component {
  render() {
    return (
      <div>
        <NavbarFix />
        <OurTeam />
      </div>
    );
  }
}

export default App;
