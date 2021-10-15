//*************Created By Rahul Modi*************
import React from "react";

import WhyIITR_1 from "./Assets/WhyIITR_1.png";
import WhyIITR_2 from "./Assets/WhyIITR_2.png";
import WhyIITR_2_Mobile from "./Assets/WhyIITR_2_Mobile.png";
import WhyIITR_3 from "./Assets/WhyIITR_3.png";

import Architecture_Planing from "./Assets/Architecture_Planing.svg";
import ScholarshipScheme from "./Assets/ScholarshipScheme.svg";
import Startups from "./Assets/Startups.svg";

import "./WhyIITR.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const HomePageCarousel = () => {
  return (
    <div id="SecondSection">
      <div className="Mobile">
        <p className="WhyIITR__Para">Know more about IITR before deciding</p>
        <h1 className="WhyIITR__Heading">Why IIT Roorkee ?</h1>
      </div>
      <div id="SecondSectionImage">
        <img alt="img" className="WhyIITR__Img WhyIITR__Img3" src={WhyIITR_3} />
        <img alt="img" className="WhyIITR__Img WhyIITR__Img1" src={WhyIITR_1} />
        <img alt="img" className="WhyIITR__Img WhyIITR__Img2" src={WhyIITR_2} />
        <img
          alt="img"
          className="WhyIITR__Img2_Mobile"
          src={WhyIITR_2_Mobile}
        />
      </div>
      <div
        id="SecondSectionContent"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="PC">
          <p className="WhyIITR__Para">Know more about IITR before deciding</p>
          <h1 className="WhyIITR__Heading">Why IIT Roorkee ?</h1>
        </div>
        <p>
          IIT Roorkee creates an environment that fosters the growth of
          intellectually capable, innovative, and entrepreneurial professionals.
          Students at IITR believe in following their passion. The Presence of
          various technical and cultural groups helps them to get a taste of
          multiple flavors in life. All the hard work and sacrifices done for
          JEE is paid off by the aura of the lush green campus. The institution
          is located on the banks of the Ganga canal in the foothills of the
          Himalayas; it ensures the best experience with serene surroundings.
          Surprisingly it even has a Himalayan Explorer's Club, the only IIT in
          India to have so. Meritious students with AIR below 250 get the
          prestigious James Thomson Scholarship. Since its establishment in
          1847, Asia's first technical Institute has played a vital role in
          providing the finest technical expertise and know-how. It ranks among
          the best technological institutions globally and has also been
          considered a trend-setter in education and research among science,
          technology, engineering, education and research.
        </p>
        <div className="WhyIITR__Icon">
          <div>
            <img alt="icon" src={Architecture_Planing} />
            <p>Architecture and Planing in the Country</p>
          </div>
          <div>
            <img alt="icon" src={ScholarshipScheme} />
            <p>Scolarships schemes for rankers</p>
          </div>
          <div>
            <img alt="icon" src={Startups} />
            <p>Startups</p>
          </div>
          <div>
            <img alt="icon" src={Startups} />
            <p>Startups</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel;
