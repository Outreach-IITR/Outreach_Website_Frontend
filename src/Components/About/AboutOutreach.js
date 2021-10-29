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
            aegis of Dean of Students' Welfare, IIT Roorkee, to connect the
            outside world with the culture of IIT Roorkee.
          </p>
          <p>
            We spread the message of IIT-R to places near and far, and our
            simple motto is to help new students achieve excellence. Meeting all of your demands, we ensure to deliver the most
            appropriate message of our institution, so you don’t have to look
            further beyond. We glorify the advancements of IITR and aid
            aspirants and future students to make life-changing decisions. We
            are the one-stop destination to introduce you to our modern life and
            traditional values, and we secure this bond at your fingertips.
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
