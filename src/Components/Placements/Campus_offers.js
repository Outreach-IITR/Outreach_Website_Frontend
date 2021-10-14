import React from "react";
import "./Campus_offers.css";
import onCampusOffersImage from "./Assets/noOfOncampusOffers.svg"
import CampusOfferImage from "./Assets/campusOffers.png"
function CampusOffers() {
  return (
    <>
      <div className="CampusOffer-heading">
        <span>No. of on campus yearwise </span>{" "}
      </div>
      <div id="image-holder_campusOffer">

          <img className="campusOfferImage" src={CampusOfferImage} alt="" />
      </div>
    </>
  );
}

export default CampusOffers;
