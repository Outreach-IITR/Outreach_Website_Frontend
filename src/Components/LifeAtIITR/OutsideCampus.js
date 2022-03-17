import React from "react";
import "./OutsideCampus.css";
import Carousel from "../Crousel/Crousel";
import OutsideCampusData from "./OutsideCampusData";

const InsideCampus = () => {
  return (
    <div id="OutsideCampus" className="OutsideCampus__Section ui container">
      <h1 className="OutsideCampus__heading">R Neighbourhood</h1>
      <Carousel slides={OutsideCampusData} />
      <div className="OC__SubSection">
        <h3 className="OC__SubHeading">Hotels and Eateries</h3>
        <p className="OC__SubPara">
          Good health is a boon to your body and to keep your belly filled and
          chilled, the R-land is surrounded by different types of cafeterias
          considering everyone’s taste and the places people come from. Among
          all, the highly rated and well known are CCD, Prakash, Radha Krishna,
          Pizza Hut, Chennai kings. Giani’s ice-cream, Rolla Costa’s shakes and
          rolls, Amul, and Desi Tadka. They have the art to surprise people with
          their edible taste. Hotels exhibit efforts to ensure the safety of the
          guests and maintain remarkable hygiene.
        </p>
      </div>
      <div className="OC__SubSection">
        <h3 className="OC__SubHeading">Getaways</h3>
        <p className="OC__SubPara">
          Every college has its own set of getaways that students look up to as
          stress busters during weekends or holidays, IITR is no different,
          however, the set here is one that’ll leave you dumbfounded. Roorkee is
          blessed with a great travel epicentre which you will not find at any
          of the other IITs.
        </p>
      </div>
      <div className="OC__SubSection">
        <h3 className="OC__SubHeading">Connecting dots to Roorkee</h3>
        <p className="OC__SubPara">
          IIT Roorkee, located in the foothills of the Himalayas, is well
          connected to Delhi by rail and road, and the distance is approximately
          200 km. The nearest airport is Dehradun's Jolly Grant airport, about
          70 km away, while the Indira Gandhi International Airport is the more
          preferred one, owing to diverse connectivity. The bus stand is
          situated right at the campus gate, with routes to places near and far,
          while the easiest way to reach Roorkee is by train from Delhi, which
          is well-linked and takes around 3-4hrs.
        </p>
      </div>
    </div>
  );
};

export default InsideCampus;
