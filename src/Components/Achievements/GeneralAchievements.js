import React, { useState } from "react";

import BubbleCarousel from "./BubbleCarousel";

import { GeneralA_List, GeneralA_Bubble } from "./GeneralA_Data";
import "./GeneralAchievements.css";

const GeneralAchievements = () => {
  const [current, setCurrent] = useState(0);
  const onClickHandler = (idx) => {
    setCurrent(idx);
  };

  return (
    <div>
      <div id="general-achievements">
        <div id="general-achievements-headings">
          <h1>General Achievements</h1>
          <h3>Land of Infinite Possibilities</h3>
        </div>
        <div className="gen-ach-content">
          <div id="gen-ach-data">
            {GeneralA_List.map((obj, idx) => {
              return (
                <div
                  id="gen-ach-data-text"
                  className={current === idx ? "active" : ""}
                  onClick={() => onClickHandler(idx)}
                  key={obj.id}
                >
                  <div>
                    <p>{obj.dep}</p>
                    {obj.link !== "" && <a href={obj.link}>Know More</a>}
                  </div>
                  <p>{obj.date}</p>
                </div>
              );
            })}
          </div>
          <BubbleCarousel current={current} Bubble_List={GeneralA_Bubble} />
        </div>
      </div>
    </div>
  );
};

export default GeneralAchievements;
