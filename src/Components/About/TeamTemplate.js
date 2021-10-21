//*************Created By Rahul Modi*************
import React, { useState } from "react";
import "./TeamTemplate.css";

const TeamTemplate = (props) => {
  const [background, setBackground] = useState("");
  const backgroundColor_List = ["#feba10", "#f96508", "#06ca3d", "#026ba1"];

  const OnHoverHandler = () => {
    let indx;
    do {
      indx = Math.floor(4 * Math.random());
    } while (background === backgroundColor_List[indx]);
    setBackground(backgroundColor_List[indx]);
  };
  return (
    <div className="TeamTemplate">
      {props.TeamList.map((member, indx) => {
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamTemplate;
