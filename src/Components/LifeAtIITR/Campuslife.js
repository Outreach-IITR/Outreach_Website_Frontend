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
                     <p id="campuscontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, pellentesque morbi egestas 
                         lorem cras sed eu. Libero pharetra tellus mi eu aliquam cras.Lorem ipsum dolor sit amet, 
                         consectetur adipiscing elit. Pharetra, pellentesque morbi egestas lorem cras sed eu. Libero pharetra 
                         tellus mi eu aliquam cras.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, 
                         pellentesque morbi egestas lorem cras sed eu. Libero pharetra tellus mi eu aliquam cras.Lorem 
                         ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, pellentesque morbi egestas lorem 
                         cras sed eu. Libero pharetra tellus mi eu aliquam cras.</p>
                </div>
                </div>
                </div>
    );
  }
}

export default Campuslife


