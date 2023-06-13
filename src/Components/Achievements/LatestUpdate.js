import React, { useState, useEffect, useCallback } from "react";

import LU__Data from "./LatestUpdateData";

import "./LatestUpdate.css";
import LeftArrow from "./Assets/LeftArrow.svg";
import RightArrow from "./Assets/RightArrow.svg";

const LatestUpdate = () => {
  const [current, setCurrent] = useState(0);
  const length = LU__Data.length;

  //Functions to change slides
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [current, nextSlide]);

  //to check passed variable is an array and is not empty
  if (!Array.isArray(LU__Data) || LU__Data.length <= 0) {
    return null;
  }

  return (
    <div className="LatestUpdate__Section">
      <h1 className="LatestUpdate__Heading">Recent Accomplishments</h1>
      <div className="LatestUpdate__Carousel">
        <img
          src={LeftArrow}
          alt="left naviagtion"
          className="LU__Navigation"
          onClick={prevSlide}
        />
        {LU__Data.map((obj, indx) => {
          if (indx >= current && indx < current + 3)
            return (
              <div key={obj.id} className="LU__CarouselImg">
                <img src={obj.img} alt="LatestUpdate" />
                <div>
                  <p>{obj.description}</p>
                  <p>{obj.date}</p>
                </div>
              </div>
            );
          return null;
        })}
        {LU__Data.map((obj, indx) => {
          if (indx < current + 3 - length)
            return (
              <div key={obj.id} className="LU__CarouselImg">
                <img src={obj.img} alt="LatestUpdate" />
                <div>
                  <p>{obj.description}</p>
                  <p>{obj.date}</p>
                </div>
              </div>
            );
          return null;
        })}
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
