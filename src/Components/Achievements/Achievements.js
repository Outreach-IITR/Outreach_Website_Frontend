import React, { Component } from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import Background from "../Background/Background";
import LatestUpdate from "./LatestUpdate";
import GeneralAchievements from "./GeneralAchievements";
import HigherStudiesCarousel from "./HigherStudiesCarousel";
import HigherStudies from "./HigherStudies";
import Startups from "./Startups";

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
        <GeneralAchievements />
        <HigherStudies />
        <HigherStudiesCarousel />
        <Startups />
      </div>
    );
  }
}

export default Achievements;
