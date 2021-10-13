import React, { useState } from "react";

import LU__Data from "./LatestUpdateData";

import "./LatestUpdate.css";
import LeftArrow from "./Assets/LeftArrow.svg";
import RightArrow from "./Assets/RightArrow.svg";

const LatestUpdate = () => {
  const [current, setCurrent] = useState(2);
  const length = LU__Data.length;

  //Functions to change slides
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //to check passed variable is an array and is not empty
  if (!Array.isArray(LU__Data) || LU__Data.length <= 0) {
    return null;
  }

  return (
    <div className="LatestUpdate__Section">
      <h1 className="LatestUpdate__Heading">Latest Updates</h1>
      <div className="LatestUpdate__Carousel">
        <img
          src={LeftArrow}
          alt="left naviagtion"
          className="LU__Navigation"
          onClick={prevSlide}
        />
        <div className="LU__CarouselImg">
          <img src={LU__Data[0].img} alt="LatestUpdate" />
          <p>{LU__Data[0].description}</p>
          <p>{LU__Data[0].date}</p>
        </div>
        <div className="LU__CarouselImg">
          <img src={LU__Data[0].img} alt="LatestUpdate" />
          <p>{LU__Data[0].description}</p>
          <p>{LU__Data[0].date}</p>
        </div>
        <div className="LU__CarouselImg">
          <img src={LU__Data[0].img} alt="LatestUpdate" />
          <p>{LU__Data[0].description}</p>
          <p>{LU__Data[0].date}</p>
        </div>
        <img
          src={RightArrow}
          className="LU__Navigation"
          alt="right naviagtion"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default LatestUpdate;
