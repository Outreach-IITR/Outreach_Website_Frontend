import React from "react";
import "./Groups.css";
import { techData } from "./techDetails";

const Groups = () => {
  return (
    <div className="containerG">
      <h1 id="groupsHeading">Campus Groups</h1>
      <div className="subBoxGroup">
        <h2 id="subheadingGroup">
          Technical
          {/* <MyDesktop>
            <input
              type="range"
              name="scroll"
              min="0"
              value={scrollValTech}
              onChange={handleScrollRangeTech}
              max={scrollTech}
            />
          </MyDesktop> */}
        </h2>
        <div className="sliderGroup" id="test">
          {techData.map((data, idx) => {
            return (
              <div className="cardG" key={idx}>
                <img src={data.image} alt="" />
                <h6>{data.name}</h6>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
        {/* <MyMobile>
          <div className="inputContainerG">
            <input
              type="range"
              name="scroll"
              min="0"
              onChange={handleScrollRangeTech}
              value={scrollValTech}
              max={scrollTech}
            />
          </div>
        </MyMobile> */}
      </div>
      <div className="subBoxGroup">
        <h2 id="subheadingGroup">
          Cultural and Social
          {/* <MyDesktop>
            <input
              type="range"
              name="scroll"
              min="0"
              onChange={handleScrollRangeCul}
              value={scrollValCul}
              max={scrollCul}
            />
          </MyDesktop> */}
        </h2>
        <div className="sliderGroup">
          {techData.map((data, idx) => {
            return (
              <div className="cardG" key={idx + 67}>
                <img src={data.image} alt="" />
                <h6>{data.name}</h6>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
        {/* <MyMobile>
          <div className="inputContainerG">
            <input
              type="range"
              name="scroll"
              min="0"
              onChange={handleScrollRangeCul}
              value={scrollValCul}
              max={scrollCul}
            />
          </div>
        </MyMobile> */}
      </div>
    </div>
  );
};

export default Groups;
