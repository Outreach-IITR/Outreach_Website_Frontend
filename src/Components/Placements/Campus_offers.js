import React from "react";
import "./Campus_offers.css";
import Campus_offer_img from "./Assets/3part.png"

class Campus_offer extends React.Component{
  render(){
    return(
      <div id="Campus_offer">
        <div id="Campus_offer_heading">
          <h2>No. of on-Campus offers <br/> yearwise</h2>
        </div>
        <div id="Campus_offer_image">
          <img alt="img" src={Campus_offer_img}></img>

        </div>
      </div>
    )
  }
}
export default Campus_offer;
