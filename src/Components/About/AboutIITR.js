import React from "react";
import "./AboutIITR.css";
import AboutIITR_Img from "./Assets/AboutIITR_Img.png";

const AboutOutreach = () => {
  return (
    <div id="AboutIITR">
      <h1 id="AboutIITR_heading" className="MobileView">
        About IIT Roorkee
      </h1>
      <div id="AboutIITR_image">
        <img alt="About IITR" src={AboutIITR_Img} />
      </div>
      <div id="AboutIITR_content">
        <h1 id="AboutIITR_heading">About IIT Roorkee</h1>
        <div id="AboutIITR_content_data">
          <p>
            Indian Institute of Technology Roorkee, established in 1847, is
            among the foremost institutes of national importance in higher
            technical education, engineering, and applied research. Since its
            establishment, the Institute has played a pivotal role in providing
            the technical workforce and know-how to the country and pursuing
            research. The Institute ranks amongst the best technological
            institutions globally and has contributed to all sectors of
            technological development. It has also been considered a
            trend-setter in education and research among science, technology,
            and engineering.
          </p>
          <p>
            The institution creates an environment that fosters the growth of
            intellectually capable, innovative, and entrepreneurial
            professionals. It makes them competent enough to contribute to the
            development of Science and Technology. In partnership with industry,
            it develops and harnesses youth for the welfare of the nation and
            humanity. The Institute admits the sharpest brains to engineering
            courses through the Joint Entrance Examination (JEE) Advanced
            examination conducted annually.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOutreach;
