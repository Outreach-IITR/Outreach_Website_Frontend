import React from "react";
import RightImage from "./Assets/Right_image.svg";
import Qmarks from "./Assets/Q-marks.svg";
import RightImage2 from "./Assets/Right_image2.svg";
import TextBottom from "./Assets/Image-text-bottom.svg";
import Updates from "./Updates";
import Blog from "./Blog";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";

import HomePageCarousel from "./HomePageCarousel/HomePageCarousel";
import WhyIITR from "./WhyIITR/WhyIITR";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="ui container">
          <div id="FirstSection">
            <div id="FirstSectionContent">
              <h1>Outreach</h1>
              <h2>THE STUDENT'S DESK</h2>
              <p>
                Bid adieu to all your doubts, anything that you might be
                confused about. Get answers to all of your questions, from the
                silliest to the smartest of them, we are here to make things
                clear and coherent.
              </p>
              <a href="#WhyIITR">
                <button id="tap_to_know">Tap to know more</button>
              </a>
            </div>
            <div id="FirstSectionImage">
              <div className="First-image-combined">
                <img
                  alt="img"
                  className="Transform-img"
                  id="First-image"
                  src={RightImage}
                />
                <img
                  alt="img"
                  className="Transform-img"
                  id="Q-marks"
                  src={Qmarks}
                />
              </div>
              <img
                alt="img"
                className="Transform-img"
                id="Second-image"
                src={RightImage2}
              />
              <img alt="img" id="Text-bottom" src={TextBottom} />
            </div>
          </div>
        </div>

        <div>
          <WhyIITR />
        </div>

        <div className="ui container">
          <HomePageCarousel />
        </div>
        <Updates />
        <Blog />
      </>
    );
  }
}

export default Homepage;
