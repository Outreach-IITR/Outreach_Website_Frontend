import React, { Component } from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import Background from "../Background/Background";
import CTC from "./CTCsection";
import BarChart from "./Barchart20_21";
import CampusOffer from"./Campus_offers";
import StudentsForHigherStudies from "./studentsForHigherStudies"
import LastPart from "./Preference&Distribution";
import CTC_image from './Assets/ctc21.png'


class Placements20_21 extends Component {
  render() {
    return (
      <>
        <NavbarFix />
        <Background heading="Placements" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet sit purus, in facilisis risus. Nulla sem lectus at habitasse turpis. 07/08/21 " />
        <CTC heading='Heighest CTC in LPA (2020-2021)' image={CTC_image}/>
        <BarChart heading='Median CTC in LPA (2020-21)'/>
        <CampusOffer/>  
        <StudentsForHigherStudies/> 
        <LastPart/>
        
      </>
    );
  }
}

export default Placements20_21;
