//*************Created By Aman Gupta*************
import React, { Component } from "react";
import "./Hostellife.css";
import Slider from "react-slick";
import hl1 from "./Assests/HL/HL-1.png";
import hl2 from "./Assests/HL/HL-2.png";
import hl3 from "./Assests/HL/HL-3.png";
import hl4 from "./Assests/HL/HL-4.png";
import hl5 from "./Assests/HL/HL-5.png";
import hl6 from "./Assests/HL/HL-6.png";
import hl7 from "./Assests/HL/HL-7.png";
import hl8 from "./Assests/HL/HL-8.png";
import hl9 from "./Assests/HL/HL-9.png";

export class Hostellife extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      fade: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="main_container">
        <div id="hostellifep">
          <div id="hostel_content">
            <h3 id="hostelhead">Hostel Life</h3>
            <p id="hostelcontent">
              Imagine a life where you wake up to sunlight falling on your face,
              with your friend’s next door, waiting to go for a great workout in
              your hostel gym, to follow it up with breakfast in a mess that
              serves delicious food, only to repeat it every morning but with
              more excitement. <br />
              This could be a small part of your routine here at IIT-R. To
              mention some specifics, there are no strict rules and regulations
              regarding hostel curfew timings. Hostels are also equipped with
              canteen facilities so you and your friends can enjoy that
              late-night chit-chat over a plate of Maggi or a cup of coffee.
              IIT-R treats its students like responsible adults and grants them
              ample freedom for exploration and enjoyment. When you are a
              hostelle-R, life for you is what you make of it during your stay
              here at IIT-R.
            </p>
          </div>
          <div id="sliderbox">
            <Slider {...settings}>
              <div className="imagescareousl_hl">
                <img alt="src" className="carouselimg" src={hl1}></img>
              </div>
              <div className="imagescareousl_hl">
                <img alt="src" className="carouselimg" src={hl2}></img>
              </div>
              <div className="imagescareousl_hl">
                <img alt="src" className="carouselimg" src={hl3}></img>
              </div>
              <div className="imagescareousl_hl">
                <img alt="img" className="carouselimg" src={hl4}></img>
              </div>
              <div className="imagescareousl_hl">
                <img alt="img" className="carouselimg" src={hl5}></img>
              </div>
              <div className="imagescareousl_hl">
                <img alt="img" className="carouselimg" src={hl6}></img>
              </div>
              <div className="imagescareousl_hl">
                <img alt="img" className="carouselimg" src={hl7}></img>
              </div>
              <div className="imagescareousl_hl">
                <img alt="img" className="carouselimg" src={hl8}></img>
              </div>
              <div className="imagescareousl_hl">
                <img alt="img" className="carouselimg" src={hl9}></img>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Hostellife;
