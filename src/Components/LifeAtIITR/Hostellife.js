//*************Created By Aman Gupta*************
import React, { Component } from 'react'
import "./Hostellife.css"
import Slider from "react-slick";
import demo from "./Assests/demoimage.png"

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
                fade:true,
                arrows:false,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
              };
              return (
                <div>
                <div id="hostellifep">
                <div id="hostel_content">
                     <h3 id="hostelhead">Hostel Life</h3>
                     <p id="hostelcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, pellentesque morbi egestas 
                         lorem cras sed eu. Libero pharetra tellus mi eu aliquam cras.Lorem ipsum dolor sit amet, 
                         consectetur adipiscing elit. Pharetra, pellentesque morbi egestas lorem cras sed eu. Libero pharetra 
                         tellus mi eu aliquam cras.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, 
                         pellentesque morbi egestas lorem cras sed eu. Libero pharetra tellus mi eu aliquam cras.Lorem 
                         ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, pellentesque morbi egestas lorem 
                         cras sed eu. Libero pharetra tellus mi eu aliquam cras.</p>
                </div>
                <div id="sliderbox">
                  <Slider {...settings}>
                    
                      <div className="imagescareousl_hl">
                          <img alt="src" className="carouselimg" src={demo}></img>
                        <h4 className="imgdis">Lorem ipsum dolor sit amet</h4>
                      </div>
                      <div className="imagescareousl_hl">
                          <img alt="src" className="carouselimg" src={demo}></img>
                        <h4 className="imgdis">Lorem ipsum dolor sit amet</h4>
                      </div>
                      <div className="imagescareousl_hl">
                          <img alt="src" className="carouselimg" src={demo}></img>
                        <h4 className="imgdis">Lorem ipsum dolor sit amet</h4>
                      </div>
                      <div className="imagescareousl_hl">
                          <img alt="img" className="carouselimg" src={demo}></img>
                        <h4 className="imgdis">Lorem ipsum dolor sit amet</h4>
                      </div>
                      <div className="imagescareousl_hl">
                          <img alt="img" className="carouselimg" src={demo}></img>
                        <h4 className="imgdis">Lorem ipsum dolor sit amet</h4>
                      </div>
                      <div className="imagescareousl_hl">
                          <img alt="img" className="carouselimg" src={demo}></img>
                        <h4 className="imgdis">Lorem ipsum dolor sit amet</h4>
                      </div>
                    
                  </Slider>
                </div>
                </div>
                </div>
    );
  }
}

export default Hostellife


