//*************Created By Rahul Modi*************
import React, { useState, useEffect, useCallback } from "react";
import "./HomePageCarousel.css";

import { slides } from "./CarouselData";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const HomePageCarousel = () => {
  const [current, setCurrent] = useState(2);
  const length = slides.length;

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
        <i className="large angle left icon left-arrow" onClick={prevSlide} />
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

              <div className="gradient" />
              {indx === current && (
                <>
                  <p className="img__caption">{img.caption}</p>
                </>
              )}
            </div>
          );
        })}
        <i className="large angle right icon right-arrow" onClick={nextSlide} />
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
