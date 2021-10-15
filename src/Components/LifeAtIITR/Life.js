import React from "react";
import NavbarFix from "../NavbarFix/NavbarFix";
import InsideCampus from "./InsideCampus";
import Events from "./Events";
import Groups from "./Groups";
import OutsideCampus from "./OutsideCampus";
import Background from "../Background/Background";

const Life = () => {
  return (
    <div>
      <NavbarFix />
      <Background heading="Life at R-Land" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet sit purus, in facilisis risus. Nulla sem lectus at habitasse turpis.
07/08/21 " />
      <InsideCampus />
      <Events />
      <Groups />
      <OutsideCampus />
    </div>
  );
};

export default Life;
