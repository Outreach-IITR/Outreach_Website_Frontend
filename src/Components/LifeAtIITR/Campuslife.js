//*************Created By Aman Gupta*************
import React, { Component } from 'react'
import "./Campuslife.css"
import Slider from "react-slick";
import cl1 from "./Assests/CL/CL-1.png"
import cl2 from "./Assests/CL/CL-2.png"
import cl3 from "./Assests/CL/CL-3.png"
import cl4 from "./Assests/CL/CL-4.png"
import cl5 from "./Assests/CL/CL-5.png"
import cl6 from "./Assests/CL/CL-6.png"
import cl7 from "./Assests/CL/CL-7.png"

export class Campuslife extends Component {
    render() {
            const settings = {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true,
                swipeToSlide: true,
                arrows:false,
                autoplay: true,
                fade:true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
              };
              return (
                <div>
                <div id="campuslifep">
                <div id="sliderbox_cl">
                  <Slider {...settings}>
                    
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={cl1}></img>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={cl2}></img>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={cl3}></img>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={cl4}></img>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={cl5}></img>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={cl6}></img>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={cl7}></img>
                      </div>
                    
                  </Slider>
                </div>
                <div id="campus_content">
                     <h3 id="campushead">Campus Facilities</h3>
                     <p id="campuscontent">The IITR campus provides a number of utilitarian amenities
                      that make its students' lives on campus trouble free. These include eateries 
                      from Amul and Nescafe to the famed CCD, banks like SBI and PNB as well as 3-4 
                      ATMs, a well equipped hospital in case of emergencies and 3 guesthouses for 
                      accommodation of guests and delegates who visit the campus. The campus has 
                      a mandir, a church, and a masjid, a post office which is well equipped and 
                      caters to the need of the students and the faculty, as well as the non 
                      residents on campus, and also provides its students with a number of 
                      sports facilities for them to excel in the sport of their choice.</p>
                </div>
                </div>
                </div>
    );
  }
}

export default Campuslife


