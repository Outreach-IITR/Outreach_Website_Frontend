import React, { Component } from "react";
import CTC_image from './Assets/ctc.png'
import "./CTCsection.css"

class CTC extends React.Component {
  render (){
    return(
      <>
      <div id="ctc">
        <div id="ctc_heading">
          <h2>{this.props.heading}</h2>

        </div>
        <div id="ctc_image">
          <img alt="img" src={this.props.image}></img>
        </div>

      </div>
      </>

    )
  }
};
export default CTC;