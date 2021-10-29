import React from "react";
import "./studentsForHigherStudies.css"
import bargraph from "../Assets/1.png";
function StudentsForHigherStudies() {
  return (
    <>
      <div className="heading">
        <span>Students pursuing higher studies</span>{" "}
      </div>

      <div className="image-holder-studentsForPhd">
        <div className="students_image_container">
          <img className="higherStudiesBargraph" src={bargraph} alt="" />
        </div>
        <div className="para-container">
          <div>
            <p className="para">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
              pellentesque morbi egestas lorem cras sed eu. Libero pharetra
              tellus mi eu aliquam cras.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Pharetra, pellentesque morbi egestas Libero
              pharetra tellus mi eu aliquam cras.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pharetra, pellentesque morbi egestas
              lorem cras sed eu. Libero pharetra tellus mi eu aliquam cras.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentsForHigherStudies;
