import React from "react";

import "./Accordion.css";
import ScholarshipImage from "./Assets/scholarshipImage.png";
import { ScholarshipData } from "./ScholarshipsData";

function Accordion_segment() {
  const onChangeHandler = (e) => {
    const isChecked = e.target.checked;
    const checkbox = document.querySelectorAll(".accordion_input");
    checkbox.forEach((obj) => (obj.checked = false));
    e.target.checked = isChecked;
  };

  return (
    <div
      id="Scholarships"
      className="accordion_segment_container main_container"
    >
      <h2 className="accordion_segment_header">Scholarships</h2>
      <div className="content_box">
        <div className="accordion">
          {ScholarshipData.map((obj, indx) => {
            return (
              <div key={indx}>
                <input
                  type="checkbox"
                  id={`section${indx}`}
                  className="accordion_input"
                  onChange={(e) => onChangeHandler(e)}
                />
                <label htmlFor={`section${indx}`} className="accordion__label">
                  <ul className="accordion_segment_section">
                    <li>{obj.name}</li>
                  </ul>
                </label>
                <div className="accordion_content">
                  <p>{obj.desp}</p>
                  <a href={obj.link}>Know more...</a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="image_box">
          <img
            className="scholarshipImage"
            src={ScholarshipImage}
            alt="ScholarshipImage"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion_segment;
