//*************Created By Rahul Modi*************
//*************Updated By Devanshu Harish Borkar*************
import React, { useState } from "react";

import EmailVector from "./Assets/EmailVector.png";
import ContactVector from "./Assets/ContactVector.svg";
import LinkedInVector from "./Assets/LinkedInVector.png";

const Secretaries = (props) => {
  const [background, setBackground] = useState("");
  const backgroundColor_List = ["#026ba1"];

  const OnHoverHandler = () => {
    setBackground(backgroundColor_List);
  };

  return (
    <div className="TeamTemplate">
      {props.SecretariesList.map((member, indx) => {
        return (
          <div
            key={indx}
            className="TeamTemplate__ImgCard"
            onMouseEnter={OnHoverHandler}
            style={{ "--hover_color": background }}
          >
            <img src={member.image} alt="icon" />
            <div className="TeamTemplate__MemberInfo">
              <h4 className="TeamTemplate__MemberName">{member.name}</h4>
              {member.post && (
                <h6 className="TeamTemplate__MemberPost">{member.post}</h6>
              )}
              <div className="Team_ContactInfo">
                <a
                  href={`mailto: ${member.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip"
                >
                  <img src={EmailVector} alt="" />
                  <div className="tooltiptext">{member.email}</div>
                </a>
                <a
                  href={`tel: ${member.phoneNo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip"
                >
                  <img src={ContactVector} alt="" />
                  <div className="tooltiptext">{member.phoneNo}</div>
                </a>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedInVector} alt="" />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Secretaries;
