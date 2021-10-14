import React from "react";
import "./HigherStudies.css";
import "./HigherStudiesOptions";
import HigherStudiesOptions from "./HigherStudiesOptions";

const HigherStudies = () => {
    return (
        <div id="HigherStudies">
            <h1 id="HigherStudies_heading" className="MobileView">
                Higher Studies
            </h1>
            <div id="HigherStudies_content">
                <h1>Higher Studies</h1>
                <div id="PartFirst">

                
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ipsum a, diam at. Morbi ipsum, sem integer amet erat varius turpis. Amet, at aliquam iaculis elementum dui nulla lobortis.Est ipsum a, diam at. Morbi ipsum, sem integer amet erat varius turpis. Amet, at aliquam iaculis elementum dui nulla lobortis.
                
                    </div>
                <div id="PartSecond">
                    <HigherStudiesOptions id="PS1" num="230" content="Lorem ipsum dolor sit amet"/>
                    <HigherStudiesOptions id="PS1" num="230" content="Lorem ipsum dolor sit amet"/>
                    <HigherStudiesOptions id="PS1" num="230" content="Lorem ipsum dolor sit amet"/>
                    <HigherStudiesOptions id="PS1" num="230" content="Lorem ipsum dolor sit amet"/>
                    <HigherStudiesOptions id="PS1" num="230" content="Lorem ipsum dolor sit amet"/>
                    <HigherStudiesOptions id="PS1" num="230" content="Lorem ipsum dolor sit amet"/>
                </div>
            </div>
        </div>
       
    )
}

export default HigherStudies