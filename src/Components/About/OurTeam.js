//*************Created By Rahul Modi*************
import React, { useState, useEffect } from "react";
import "./OurTeam.css";

import TeamMembers from "./TeamMembers";
import Secretaries from "./Secretaries";
import TeamTemplate from "./TeamTemplate";
import Founders from "./Founders";
import ArrowUp from "./Assets/ArrowUp.svg";
import ArrowDown from "./Assets/ArrowDown.svg";

const OurTeam = () => {
  const [width, setWidth] = useState(window.innerWidth);
  let isMobile = width < 700;
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const verticals__List = [
    "Development",
    "Design",
    "Multimedia",
    "Operations",
    "Editorial",
    "Social Media",
  ];

  const [vertical, setVertical] = useState("Development");
  const Verticalhandler = (vert) => {
    setVertical(vert);
  };

  const [showSecretaries, setShowSecretaries] = useState(true);
  const SecretariesHandler = () => {
    if (isMobile) {
      setShowSecretaries((prevState) => !prevState);
    }
  };

  const [showTeamMember, setShowTeamMember] = useState(!isMobile);
  const TeamMemberHandler = () => {
    if (isMobile) {
      setShowTeamMember((prevState) => !prevState);
    }
  };

  return (
    <div id="OurTeam" className="ui container">
      <div className="random">
      <h2 className="OurTeam__heading">Our Team</h2>
      </div>
      <div className="SecretariesContainer">
      <div className="random">

        <div className="OurTeam__subheading" onClick={SecretariesHandler}>
          <h3>Secretaries</h3>
          {isMobile && (
            <img src={showSecretaries ? ArrowUp : ArrowDown} alt="arrow" />
          )}
        </div>
        </div>

        {(!isMobile || showSecretaries) && (
          <>
            <Secretaries SecretariesList={TeamMembers.Secretaries} />
            <TeamTemplate TeamList={TeamMembers.JointSecretaries} />
          </>
        )}
      </div>
      <div className="TeamContainer">
      <div className="random">
        <div className="OurTeam__subheading" onClick={TeamMemberHandler}>
          <h3>Team Members</h3>
          {isMobile && (
            <img src={showTeamMember ? ArrowUp : ArrowDown} alt="arrow" />
          )}
        </div>
        </div>
        {(!isMobile || showTeamMember) && (
          <>
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
      


          </>
        )}

      </div>
      <div className="random">

            <div className="Founders">
          <h3>Meet our Founders</h3>
          </div>
          </div>
            <Founders TeamList={TeamMembers.founders} />
    </div>
  );
};

export default OurTeam;
