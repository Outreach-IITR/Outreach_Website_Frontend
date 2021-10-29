import React from "react";
import "./studentsForHigherStudies.css"
import std_higher_img from "./Assets/4part.png"
class StudentsForHigherStudies extends React.Component{
  render(){
    return(
      <>
      <div id="Std_for_study">
        <div id="Std_for_study_heading">
          <h2>Students pursuing higher studies</h2>
        </div>
        <div id="Std_for_study_data">
          <div id="Std_for_study_img">
            <img alt="img" src={std_higher_img}></img>
            <p>Total Students persuing Masters` or Phds in <br/> foreign institutions : <b>63</b> (2020)</p>
          </div>
          <div id="Std_for_study_content">
            <p>For those enthusiastic students who want to delve into research or gain specialisation in any discipline, IIT Roorkee is worth considering.
              <br/>
              <br/>
              From IIT Roorkee, a considerable number of students opt for higher studies. The students are from various disciplinary courses.
               IIT Roorkee provides a number of opportunities for students to learn more about the fields of higher education and research besides the courses taught at the institute.
              </p>

          </div>
        </div>
      </div>
      </>

    );
  };
};

export default StudentsForHigherStudies;
