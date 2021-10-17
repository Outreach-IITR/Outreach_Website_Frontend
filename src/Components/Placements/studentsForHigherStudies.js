import React from "react";
import "./studentsForHigherStudies.css"
import std_higher_img from "./Assets/4part.png"
class StudentsForHigherStudies extends React.Component{
  render(){
    return(
      <>
      <div id="Std_for_study">
        <div id="Std_for_study_heading">
          <h2>Percentage of students going for Higher Studies</h2>
        </div>
        <div id="Std_for_study_data">
          <div id="Std_for_study_img">
            <img alt="img" src={std_higher_img}></img>
            <p>Total Students persuing Masters` or Phds in <br/> foreign institutions : <b>63</b> (2020)</p>
          </div>
          <div id="Std_for_study_content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pharetra, pellentesque morbi egestas lorem cras sed eu. 
              Libero pharetra tellus mi eu aliquam cras.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pharetra, pellentesque morbi egestas
              <br/>
              <br/>
              Libero pharetra tellus mi eu aliquam cras.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pharetra, pellentesque morbi egestas lorem cras sed eu. Libero pharetra tellus mi eu aliquam cras.
              </p>

          </div>
        </div>
      </div>
      </>

    );
  };
};

export default StudentsForHigherStudies;
