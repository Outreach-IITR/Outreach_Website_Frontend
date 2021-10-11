//*************Created By Akshit Gupta*************
import React, { useState } from "react";
import "./Departments.css";
import list from "./departmentInfo";

const Departments = () => {
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
    <>
      <h1>Departments</h1>
      <div className="containerD">
        {list.map((data, idx) => {
          return (
            <>
              <div
                className="cardD"
                key={list.id}
                onMouseEnter={OnHoverHandler}
                style={{ "--hover_color": background }}
              >
                <p>{data.dep}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Departments;
