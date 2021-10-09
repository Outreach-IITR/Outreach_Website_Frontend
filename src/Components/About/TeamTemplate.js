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
            <img alt="icon" src={member.image} />
            <h4 className="TeamTemplate__MemberName">{member.name}</h4>
            <h6 className="TeamTemplate__MemberPost">Secretary</h6>
          </div>
        );
      })}
    </div>
  );
};

export default TeamTemplate;
