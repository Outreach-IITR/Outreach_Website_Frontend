import React, { Component } from "react";
import CTC from "./Page_content";
import CampusOffers from "./Campus_offers";
import StudentsForHigherStudies from "./studentsForHIgherStudies/studentsForHigherStudies";
import LastPart from "./LastPart";

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
