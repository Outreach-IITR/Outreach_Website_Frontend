import React, { useState } from "react";
import "./OurTeam.css";

import TeamMembers from "./TeamMembers";
import TeamTemplate from "./TeamTemplate";

const OurTeam = () => {
  const verticals__List = [
    "Design",
    "Development",
    "Multimedia",
    "Operations",
    "Editorial",
    "Social Media",
  ];

  const [vertical, setVertical] = useState("Design");
  const Verticalhandler = (vert) => {
    setVertical(vert);
  };

  return (
    <div id="OurTeam" className="ui container">
      <h2 className="OurTeam__heading">Our Team</h2>
      <div className="SecretariesContainer">
        <h3 className="OurTeam__subheading">Secretaries</h3>
        <TeamTemplate TeamList={TeamMembers.Secretaries} />
      </div>
      <div className="TeamContainer">
        <h3 className="OurTeam__subheading">Team Members</h3>
        <ul className="vertical__list">
          {verticals__List.map((vert, key) => (
            <li
              className={vertical === vert ? "active" : ""}
              onClick={() => {
                Verticalhandler(vert);
              }}
              key={key}
            >
              {vert}
            </li>
          ))}
        </ul>
        <TeamTemplate TeamList={TeamMembers[`${vertical}`]} />
      </div>
    </div>
  );
};

export default OurTeam;
