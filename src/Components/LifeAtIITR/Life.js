import React from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import InsideCampus from "./InsideCampus";
import Events from "./Events";
import Groups from "./Groups";
import OutsideCampus from "./OutsideCampus";
import Background from "../Background/Background";
import Hostellife from "./Hostellife"
import Campuslife from "./Campuslife";

const Life = () => {
  return (
    <div>
      <NavbarFix />
      <Background heading="Life at R-Land" text="Welcome to the one-stop destination for knowing about the grandeur of Life at IITR." />
      <InsideCampus />
      <Hostellife />
      <Campuslife />
      <Events />
      <Groups />
      <OutsideCampus />
    </div>
  );
};

export default Life;
