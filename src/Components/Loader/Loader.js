import React from "react";
import Blue_Part from "./Assets/Blue_Part.svg";
import Orange_Part from "./Assets/Orange_Part.svg";
import Yellow_Part from "./Assets/Yellow_Part.svg";
import Green_Part from "./Assets/Green_Part.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="Loader">
      <div id="LoadingText">
        <h1>Loading</h1>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="LogoContainer">
        <img className="BluePart" src={Blue_Part} alt="logo" />
        <img className="OrangePart" src={Orange_Part} alt="logo" />
        <img className="YellowPart" src={Yellow_Part} alt="logo" />
        <img className="GreenPart" src={Green_Part} alt="logo" />
      </div>
    </div>
  );
};

export default Loader;
