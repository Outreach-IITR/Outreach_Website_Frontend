// *******************Made By Rahul Modi****************************
import React from "react";

import "./BubbleCarousel.css";

const BubbleCarousel = (props) => {
  return (
    <div className="BubbleCarousel">
      {props.Bubble_List.map((obj, indx) => {
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
