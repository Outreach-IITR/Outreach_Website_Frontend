// *************Made By Rahul Modi**************
import React from "react";
import "./InsideCampus.css";
import Carousel from "../Crousel/Crousel";
import InsideCampusData from "./InsideCampusData";

const InsideCampus = () => {
  return (
    <div className="InsideCampus__Section">
      <h1 className="InsideCampus__heading">Inside Campus</h1>
      <Carousel slides={InsideCampusData} />
      <div className="CampusLife">
        <h3 className="CampusLife__heading">Campus Life</h3>
        <p className="CampusLife__para">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, pellentesque morbi egestas lorem cras sed eu. Libero pharetra tellus mi eu aliquam cras.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, pellentesque morbi egestas lorem cras sed eu.<WHATS ITS LIKE LIVING INSIDE CAMPUS> Libero pharetra tellus mi eu aliquam cras.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, pellentesque morbi egestas lorem cras sed eu. Libero pharetra tellus mi eu aliquam cras.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, pellentesque morbi egestas lorem cras sed eu. Libero pharetra tellus mi eu aliquam cras."
          }
        </p>
      </div>
    </div>
  );
};

export default InsideCampus;
