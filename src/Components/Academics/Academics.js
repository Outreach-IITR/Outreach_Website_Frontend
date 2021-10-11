import React, { Component } from "react";
import NavbarFix from "../Navbar/Navbar";
import Departments from "./Departments";
import Minors from "./Minors";


class Academics extends Component {
  render() {
    return (
      <div>
        <NavbarFix />
        <Departments />
        {/* <DepartmentName /> */}
        <Minors />
      </div>
    );
  }
}

export default Academics;
