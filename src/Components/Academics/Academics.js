import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Departments from "./Departments";


class Academics extends Component {
  render() {
    return (
      <div>
        <Navbar />
        This is the academics page
        <Departments />
      </div>
    );
  }
}

export default Academics;
