import React, { Component } from "react";
import NavbarFix from "../Navbar/Navbar";
import Departments from "./Departments";

class Academics extends Component {
  render() {
    return (
      <div>
        <NavbarFix />
        <Departments />
        {/* <DepartmentName /> */}
      </div>
    );
  }
}

export default Academics;
