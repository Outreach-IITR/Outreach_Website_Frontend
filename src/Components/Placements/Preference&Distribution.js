import React from "react";
import "./Preference&Distribution.css"
import image1 from "./Assets/5.1part.png"
import image2 from "./Assets/5.2part.png";
class LastPart extends React.Component {
  render(){
  return (
    <>

      <div id="container_images">
        <div id="image-holder-left">
          <div id="pref_left_content">
            <h2 >Program Preference</h2>
          </div>
          <div id="pref_left_img">
            <img src={image1} alt="" />
          </div>
        </div>
        <div id="image-holder-right">
          <div id="pref_right_content">
              <h2 >Country wise distribution of <br/>Post Graduate Students</h2>
          </div>
          <div id="pref_right_img">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </>
  );}
}

export default LastPart;
