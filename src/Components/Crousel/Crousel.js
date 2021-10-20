//*************Created By Rahul Modi*************
import React, { useState, useEffect, useCallback } from "react";
import "./Carousel.css";
import LeftArrow from "./Assets/LeftArrow.svg";
import RightArrow from "./Assets/RightArrow.svg";

// import { slides } from "./AcadCarouselData";

const Crousel = (props) => {
  let slides = props.slides;
  const length = slides.length;
  const [current, setCurrent] = useState(Math.floor(length / 2));

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

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="Carousel">
      <section className="slider">
        <img
          className="left-arrow"
          src={LeftArrow}
          alt="left control"
          onClick={prevSlide}
        />

        {slides.map((img, indx) => {
          return (
            <div
              className={`slide ${indx === current ? "active " : ""}${
                (indx < current && `prevImg${current - indx}`) ||
                (indx > current && `nextImg${indx - current}`) ||
                (indx === current && "currentImg")
              }`}
              key={indx}
            >
              <img src={img.image} alt="travel" className={`Img`} />

              {/* <div className="gradient" /> */}
              {indx === current && (
                <>
                  <p className="img__caption">{img.caption}</p>
                </>
              )}
            </div>
          );
        })}
        <img
          className="right-arrow"
          src={RightArrow}
          alt="right control"
          onClick={nextSlide}
        />
      </section>
      {slides.map((img, indx) => {
        return (
          indx === current && (
            <div key={indx} className="img__descp">
              {img.description}
            </div>
          )
        );
      })}
    </div>
  );
};

export default Crousel;
