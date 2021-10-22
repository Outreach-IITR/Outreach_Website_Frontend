//*************Created By Aman Gupta*************
import React, { Component } from 'react'
import "./Campuslife.css"
import Slider from "react-slick";
import demo from "./Assests/demoimage.png"

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
                // beforeChange: function(currentSlide, nextSlide) {
                //   console.log("before change", currentSlide, nextSlide);
                // },
                // afterChange: function(currentSlide) {
                //   console.log("after change", currentSlide);
                // }
              };
              return (
                <div>
                <div id="campuslifep">
                <div id="sliderbox_cl">
                  <Slider {...settings}>
                    
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={demo}></img>
                        <h4 className="imgdis_cl">Lorem ipsum dolor sit amet</h4>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={demo}></img>
                        <h4 className="imgdis_cl">Lorem ipsum dolor sit amet</h4>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={demo}></img>
                        <h4 className="imgdis_cl">Lorem ipsum dolor sit amet</h4>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={demo}></img>
                        <h4 className="imgdis_cl">Lorem ipsum dolor sit amet</h4>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={demo}></img>
                        <h4 className="imgdis_cl">Lorem ipsum dolor sit amet</h4>
                      </div>
                      <div className="imagescareousl_cl">
                          <img alt="img" className="carouselimg_cl" src={demo}></img>
                        <h4 className="imgdis_cl">Lorem ipsum dolor sit amet</h4>
                      </div>
                    
                  </Slider>
                </div>
                <div id="campus_content">
                     <h3 id="campushead">Campus Life</h3>
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


