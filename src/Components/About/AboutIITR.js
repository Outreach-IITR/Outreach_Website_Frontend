import React from "react";
import "./AboutIITR.css";
import AboutIITR_Img from "./Assets/AboutIITR_Img.png";

const AboutOutreach = () => {
  return (
    <div id="AboutIITR">
      <div id="AboutIITR_image">
        <img alt="IITR image" src={AboutIITR_Img} />
      </div>
      <div id="AboutIITR_content">
        <div id="AboutIITR_heading">
          <h1>About IIT Roorkee</h1>
        </div>
        <div id="AboutIITR_content_data">
          <p>
            Located in the banks of the Ganga canal in the foothills of the
            Himalayas, IIT Roorkee is one of the most prestigious institutes of
            India. Since its establishment in 1847, the Institute has played a
            vital role in providing the technical workforce and know-how to the
            country and pursuing research. The Institute ranks amongst the best
            technological institutions globally and has contributed to all
            sectors of technological development. It has also been considered a
            trend-setter in education and research among the fields of science,
            technology, and engineering.
          </p>
          <p>
            The institution creates an environment that fosters the growth of
            intellectually capable, innovative, and entrepreneurial
            professionals. It makes them competent enough to contribute to the
            development of Science and Technology. In partnership with industry,
            it develops and harnesses youth for the welfare of the nation and
            humanity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOutreach;
