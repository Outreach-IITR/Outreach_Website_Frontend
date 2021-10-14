import React, { Component } from "react";
import CTC from "./CTCsection";
import CampusOffers from "./Campus_offers";
import StudentsForHigherStudies from "./studentsForHIgherStudies/studentsForHigherStudies";
import LastPart from "./Preference&Distribution";

class Placements extends Component {
  render() {
    return (
      <>
            <div>This is the placements page</div>
            <CTC />
            <CampusOffers />
        <StudentsForHigherStudies />
        <LastPart/>
      </>
    );
  }
}

export default Placements;
