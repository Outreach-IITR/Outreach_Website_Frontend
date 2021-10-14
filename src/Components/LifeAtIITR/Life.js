import React from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import InsideCampus from "./InsideCampus";
import Events from "./Events";
import Groups from "./Groups";
import OutsideCampus from "./OutsideCampus";

const Life = () => {
  return (
    <div>
      <NavbarFix />
      <InsideCampus />
      <Events />
      <Groups />
      <OutsideCampus />
    </div>
  );
};

export default Life;
