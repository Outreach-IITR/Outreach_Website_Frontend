import React, { Component } from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import Background from "../Background/Background";
import CTC from "./CTCsection";
import BarChart from "./Barchart";
import CampusOffer from"./Campus_offers";
import StudentsForHigherStudies from "./studentsForHigherStudies"
import LastPart from "./Preference&Distribution";


class Placements extends Component {
  render() {
    return (
      <>
        <NavbarFix />
        <Background heading="Placements" text="All important stats at one place" />
        <CTC/>
        <BarChart/>
        <CampusOffer/>  
        <StudentsForHigherStudies/> 
        <LastPart/>
        
      </>
    );
  }
}

export default Placements;
