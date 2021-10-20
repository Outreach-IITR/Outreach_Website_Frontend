import React from "react";
import CTC_image from './Assets/ctc.png'
import "./CTCsection.css"

class CTC extends React.Component {
  render (){
    return(
      <>
      <div id="ctc">
        <div id="ctc_heading">
          <h2>Heighest CTC in LPA (2019-2020)</h2>

        </div>
        <div id="ctc_image">
          <img alt="img" src={CTC_image}></img>
        </div>

      </div>
      </>

    )
  }
};
export default CTC;