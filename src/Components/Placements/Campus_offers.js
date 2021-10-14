import React from "react";
import "./Campus_offers.css";
import CampusOfferImage from "./Assets/campusOffers.png"
function CampusOffers() {
  return (
    <>
      <div className="CampusOffer-heading">
        <span>No. of on campus offers yearwise </span>{" "}
      </div>
      <div id="image-holder_campusOffer">

          <img className="campusOfferImage" src={CampusOfferImage} alt="" />
      </div>
    </>
  );
}

export default CampusOffers;
