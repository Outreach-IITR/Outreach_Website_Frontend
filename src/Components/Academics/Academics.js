import React, { Component } from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import Departments from "./Departments";
import Minors from "./Minors";
import Background from "../Background/Background";
import AccordionSegment from "./Accordion/Accordion";

class Academics extends Component {
  render() {
    return (
      <div>
        <NavbarFix />
        <Background
          heading="Academics"
          text="IITR provides students with the best environment and buffet of opportunities to steer their academic careers."
        />
        <AccordionSegment />
        <Departments />
        {/* <DepartmentName /> */}
        <Minors />
      </div>
    );
  }
}

export default Academics;
