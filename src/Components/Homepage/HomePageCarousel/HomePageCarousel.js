//*************Created By Rahul Modi*************
import React, { useState, useEffect, useCallback } from "react";
import YouTube from "react-youtube";
import "./HomePageCarousel.css";

import { slides } from "./CarouselData";
import LeftArrow from "./Assets/LeftArrow.svg";
import RightArrow from "./Assets/RightArrow.svg";

const HomePageCarousel = () => {
  const [current, setCurrent] = useState(2);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const length = slides.length;

  //Functions to change slides
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const onPlayHandler = () => {
    setIsVideoPlaying(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVideoPlaying) {
        nextSlide();
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [current, nextSlide, isVideoPlaying]);

  //to check passed variable is an array and is not empty
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

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
              <YouTube
                containerClassName="Img"
                videoId={img.video}
                opts={opts}
                onPlay={onPlayHandler}
              />
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
