import React, { Component } from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import Departments from "./Departments";
import Minors from "./Minors";

import AccordionSegment from "./Accordion/Accordion";

class Academics extends Component {
  render() {
    return (
      <div>
        <NavbarFix />
        <AccordionSegment />
        <Departments />
        {/* <DepartmentName /> */}
        <Minors />
        
      </div>
    );
  }
}

export default Academics;
