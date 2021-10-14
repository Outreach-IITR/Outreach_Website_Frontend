import React from "react";
import "./Page_content.css"
import  CTCimage  from "./Assets/CTC_img.png"
function CTC() {
    return (
      <>
        <div className="ctc-heading">
          <span>Highest CTC in LPA (2019-20)</span>{" "}
        </div>
        <div className="image-holder">
          <div>
            <img className="CTCImage" src={CTCimage} alt="" height="500" />
          </div>
        </div>
      </>
    );
}

export default CTC;