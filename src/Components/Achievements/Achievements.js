import React, { Component } from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import Background from "../Background/Background";
import LatestUpdate from "./LatestUpdate";
import GeneralAchievements from "./GeneralAchievements";
import FeildAchievements from "./FeildAchievements";
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
          text="Achievements-The aggregation of great efforts, determination, courage and skills"
        />
        <LatestUpdate />
        <GeneralAchievements />
        <FeildAchievements />
        <HigherStudies />
        <HigherStudiesCarousel />
        <Startups />
      </div>
    );
  }
}

export default Achievements;
