import React from "react";
import RightImage from "./Assets/Right_image.svg";
import Qmarks from "./Assets/Q-marks.svg";
import RightImage2 from "./Assets/Right_image2.svg";
import TextBottom from "./Assets/Image-text-bottom.svg";
import "./Homepage.css";

import HomePageCarousel from "../HomePageCarousel/HomePageCarousel";
import WhyIITR from "./WhyIITR/WhyIITR";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <div className="ui container">
          <div id="FirstSection">
            <div id="FirstSectionContent">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                ligula dictum facilisis et morbi aliquet. Egestas diam porttitor
                faucibus elementum facilisis consequat risus elit.
              </p>
              <button>Tap to know more</button>
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

        <div className="ui container">
          <WhyIITR />
        </div>

        <div className="ui container">
          <HomePageCarousel />
        </div>
      </>
    );
  }
}

export default Homepage;
