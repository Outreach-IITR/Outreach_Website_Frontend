import React from "react";
import "./OutsideCampus.css";
import Carousel from "../Crousel/Crousel";
import OutsideCampusData from "./OutsideCampusData";

const InsideCampus = () => {
  return (
    <div className="OutsideCampus__Section">
      <h1 className="OutsideCampus__heading">Outside Campus</h1>
      <Carousel slides={OutsideCampusData} />
      <div className="OC__SubSection">
        <h3 className="OC__SubHeading">LOREM IPSUM </h3>
        <p className="OC__SubPara">
          The basic structure of Departmental Honours is similar to Minor
          Specialization. Students with interests in their own department and
          having a CGPA greater than 7.5 can take 4-5 extra courses from their
          department and pass out with an Honours degree. The courses for
          gaining an honours degree are floated before the beginning of every
          semester by the concerned department and are called Departmental
          Honours Courses. Similar to Minors, a student passing out with an
          Honours will have it mentioned in his degree.
        </p>
      </div>
      <div className="OC__SubSection">
        <h3 className="OC__SubHeading">LOREM IPSUM </h3>
        <p className="OC__SubPara">
          The basic structure of Departmental Honours is similar to Minor
          Specialization. Students with interests in their own department and
          having a CGPA greater than 7.5 can take 4-5 extra courses from their
          department and pass out with an Honours degree. The courses for
          gaining an honours degree are floated before the beginning of every
          semester by the concerned department and are called Departmental
          Honours Courses. Similar to Minors, a student passing out with an
          Honours will have it mentioned in his degree.
        </p>
      </div>
      <div className="OC__SubSection">
        <h3 className="OC__SubHeading">LOREM IPSUM </h3>
        <p className="OC__SubPara">
          The basic structure of Departmental Honours is similar to Minor
          Specialization. Students with interests in their own department and
          having a CGPA greater than 7.5 can take 4-5 extra courses from their
          department and pass out with an Honours degree. The courses for
          gaining an honours degree are floated before the beginning of every
          semester by the concerned department and are called Departmental
          Honours Courses. Similar to Minors, a student passing out with an
          Honours will have it mentioned in his degree.
        </p>
      </div>
    </div>
  );
};

export default InsideCampus;
