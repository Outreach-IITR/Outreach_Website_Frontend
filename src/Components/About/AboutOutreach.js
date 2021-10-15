import React from "react";

import "./AboutOutreach.css";
import aboutusimg from "./Assets/AboutOutreach_Img.png";

const AboutOutreach = () => {
  return (
    <div id="AboutOutreach">
      <h1 id="AboutOutreach_heading" className="MobileView">
        About IIT Roorkee
      </h1>
      <div id="AboutOutreach_content">
        <div id="AboutOutreach_heading">
          <h1>About Outreach</h1>
        </div>
        <div id="AboutOutreach_content_data">
          <p>
            Outreach cell, IIT Roorkee, is a student-led community under the
            aegis of Dean of Student Welfare, IIT Roorkee, to connect the
            outside world with the culture of IIT Roorkee.
          </p>
          <p>
            Spreading the message of IIT-R to places near and far, helping new
            students achieve their potential beyond par, meeting all of your
            demands, look no further beyond, this is the one-stop destination to
            introduce you to our modern life and traditional values’ secure
            bond.
          </p>
        </div>
      </div>
      <div id="AboutOutreach_image">
        <img alt="About Outreach" src={aboutusimg} />
      </div>
    </div>
  );
};

export default AboutOutreach;
