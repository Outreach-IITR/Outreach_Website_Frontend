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
        <Background heading="Academics" text="Lacus elementum blandit venenatis faucibus vulputate ultrices blandit euismod." />
        <AccordionSegment />
        <Departments />
        {/* <DepartmentName /> */}
        <Minors />

      </div>
    );
  }
}

export default Academics;
