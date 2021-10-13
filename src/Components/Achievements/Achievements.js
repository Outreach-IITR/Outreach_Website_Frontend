import React, { Component } from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import Background from "../Background/Background";
import LatestUpdate from "./LatestUpdate";

class Achievements extends Component {
  render() {
    return (
      <div>
        <NavbarFix />
        <Background
          heading="Achievements"
          text="Lacus elementum blandit venenatis faucibus vulputate ultrices blandit euismod."
        />
        <LatestUpdate />
      </div>
    );
  }
}

export default Achievements;
