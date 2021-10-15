// *******************Made By Rahul Modi****************************
import React from "react";
import BubbleCarousel__1 from "./Assets/BubbleCarousel__1.png";
import BubbleCarousel__2 from "./Assets/BubbleCarousel__2.png";
import BubbleCarousel__3 from "./Assets/BubbleCarousel__3.png";
import BubbleCarousel__4 from "./Assets/BubbleCarousel__6.png";
import BubbleCarousel__5 from "./Assets/BubbleCarousel__7.png";

import "./BubbleCarousel.css";

const BubbleCarousel_Data = [
  {
    image: BubbleCarousel__1,
  },
  {
    image: BubbleCarousel__2,
  },
  {
    image: BubbleCarousel__3,
  },
  {
    image: BubbleCarousel__4,
  },
  {
    image: BubbleCarousel__5,
  },
];

const BubbleCarousel = (props) => {
  return (
    <div className="BubbleCarousel">
      {BubbleCarousel_Data.map((obj, indx) => {
        return (
          <img
            className={props.current === indx ? "current" : ""}
            src={obj.image}
            alt={`bubbleCarousel ${indx}`}
            key={indx}
          />
        );
      })}
    </div>
  );
};

export default BubbleCarousel;
