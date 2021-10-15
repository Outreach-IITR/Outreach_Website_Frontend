import React, { Component } from "react";
// import NavbarFix from "../NavbarFix/NavbarFix";
import CTC from "./CTCsection";
import CampusOffers from "./Campus_offers";
import StudentsForHigherStudies from "./studentsForHIgherStudies/studentsForHigherStudies";
import LastPart from "./Preference&Distribution";
import NavbarFix from "../NavbarFix/NavbarFix";
import Background from "../Background/Background";

class Placements extends Component {
  render() {
    return (
      <>
        <NavbarFix />
        <Background heading="Placements" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet sit purus, in facilisis risus. Nulla sem lectus at habitasse turpis.
07/08/21 " />
            <CTC />
            <CampusOffers />
        <StudentsForHigherStudies />
        <LastPart/>
      </>
    );
  }
}

export default Placements;
