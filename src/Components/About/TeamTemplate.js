//*************Created By Rahul Modi*************
//*************Updated By Devanshu Harish Borkar*************
import React, { useState } from "react";
import "./TeamTemplate.css";

const TeamTemplate = (props) => {
  const [background, setBackground] = useState("");
  const backgroundColor_List = ["#026ba1"];

  const OnHoverHandler = () => {
    setBackground(backgroundColor_List);
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
