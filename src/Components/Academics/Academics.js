import React, { Component } from "react";
<<<<<<< HEAD
=======
import NavbarFix from "../NavbarFix/NavbarFix";
import Departments from "./Departments";
import Minors from "./Minors";
import Background from "../Background/Background";
>>>>>>> 420c96e006aaa9e8916c479e1f6f3de6f3da6248
import AccordionSegment from "./Accordion/Accordion";

class Academics extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <AccordionSegment />
=======
        <NavbarFix />
        <Background heading="Academics" text="Lacus elementum blandit venenatis faucibus vulputate ultrices blandit euismod."/>
        <AccordionSegment />
        <Departments />
        {/* <DepartmentName /> */}
        <Minors />
        
>>>>>>> 420c96e006aaa9e8916c479e1f6f3de6f3da6248
      </div>
    );
  }
}

export default Academics;
