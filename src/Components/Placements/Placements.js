import React, { Component } from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import Background from "../Background/Background";
import CTC from "./CTCsection";
import BarChart from "./Barchart";
import Campus_Offer from"./Campus_offers";
import StudentsForHigherStudies from "./studentsForHigherStudies"
import LastPart from "./Preference&Distribution";


class Placements extends Component {
  render() {
    return (
      <>
        <NavbarFix />
        <Background heading="Placements" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet sit purus, in facilisis risus. Nulla sem lectus at habitasse turpis. 07/08/21 " />
        <CTC/>
        <BarChart/>
        <Campus_Offer/>  
        <StudentsForHigherStudies/> 
        <LastPart/>
        
      </>
    );
  }
}

export default Placements;
