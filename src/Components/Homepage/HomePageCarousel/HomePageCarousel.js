//*************Created By Rahul Modi*************
import React, { useState, useCallback } from "react";
import "./HomePageCarousel.css";

import { slides } from "./CarouselData";
import LeftArrow from "./Assets/LeftArrow.svg";
import RightArrow from "./Assets/RightArrow.svg";

const HomePageCarousel = () => {
  const [current, setCurrent] = useState(2);
  const length = slides.length;

  //Functions to change slides
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => nextSlide(), 3000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [current, nextSlide]);

  //to check passed variable is an array and is not empty
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div
      className="Carousel"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
    >
      <div className="Carousel__Title">
        <h3>IIT Roorkee at a Glance</h3>
        <p>Dont just take our word, see yourself</p>
      </div>

      <section className="slider">
        <img
          className="left-arrow"
          src={LeftArrow}
          alt="left control"
          onClick={prevSlide}
        />
        {/* To show each slide */}
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
              {/* Giving each slide a class wrt to its position from current slide */}
              <iframe
                className="Img"
                src={img.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>
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

export default HomePageCarousel;
