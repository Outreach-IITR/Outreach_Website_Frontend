import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import MyMobile from "../../helperComponents/MyMobile";
import MyDesktop from "../../helperComponents/MyDesktop";
import "./Groups.css";
import { techData } from "./techDetails";
import { culData } from "./cultDetails";

const Groups = () => {
  const [scrollTech, setScrollTech] = useState(0);
  const [scrollCul, setScrollCul] = useState(0);
  const [scrollValTech, setScollValTech] = useState(0);
  const [scrollValCul, setScollValCul] = useState(0);
  const myRef = useRef();
  const culRef = useRef();

  useLayoutEffect(() => {
    function UpdateSize() {
      setScrollTech(myRef.current.scrollWidth - myRef.current.clientWidth);
      setScrollCul(culRef.current.scrollWidth - culRef.current.clientWidth);
    }
    UpdateSize();
  }, []);

  useEffect(() => {
    function size() {
      setScollValTech(myRef.current.scrollLeft);
    }
    size();
    // window.onscroll()
  }, []);

  const handleScrollTech = (e) => {
    setScollValTech(myRef.current.scrollLeft);
  };

  const handleScrollCul = (e) => {
    setScollValCul(culRef.current.scrollLeft);
  };

  const handleScrollRangeTech = (e) => {
    setScollValTech(e.target.value);
    myRef.current.scrollLeft = scrollValTech;
  };

  const handleScrollRangeCul = (e) => {
    setScollValCul(e.target.value);
    culRef.current.scrollLeft = scrollValCul;
  };

  window.addEventListener("load", () => {
    setScrollTech(myRef.current.scrollWidth - myRef.current.clientWidth);
  });

  return (
    <div id="CampusGroups" className="containerG">
      <h1 id="groupsHeading">Campus Groups</h1>
      <div className="subBoxGroup">
        <h2 id="subheadingGroup">
          Technical
          <MyDesktop>
            <input
              type="range"
              name="scroll"
              min="0"
              value={scrollValTech}
              onChange={handleScrollRangeTech}
              max={scrollTech}
            />
          </MyDesktop>
        </h2>
        <div
          className="sliderGroup invisible-scrollbar"
          onScroll={handleScrollTech}
          ref={myRef}
          id="test"
        >
          {techData.map((data, idx) => {
            return (
              <div className="cardG invisible-scrollbar" key={idx}>
                <img src={data.image} alt="" />
                <h6>{data.name}</h6>
                <p className="invisible-scrollbar">{data.description}</p>
              </div>
            );
          })}
        </div>
        <MyMobile>
          <div className="inputContainerG">
            <input
              type="range"
              name="scroll"
              min="0"
              onChange={handleScrollRangeTech}
              value={scrollValTech}
              max={scrollTech}
            />
          </div>
        </MyMobile>
      </div>
      <div className="subBoxGroup">
        <h2 id="subheadingGroup">
          Cultural and Social
          <MyDesktop>
            <input
              type="range"
              name="scroll"
              min="0"
              onChange={handleScrollRangeCul}
              value={scrollValCul}
              max={scrollCul}
            />
          </MyDesktop>
        </h2>
        <div
          className="sliderGroup invisible-scrollbar"
          ref={culRef}
          onScroll={handleScrollCul}
        >
          {culData.map((data, idx) => {
            return (
              <div className="cardG invisible-scrollbar" key={idx + 67}>
                <img src={data.image} alt="" />
                <h6>{data.name}</h6>
                <p className="invisible-scrollbar">{data.description}</p>
              </div>
            );
          })}
        </div>
        <MyMobile>
          <div className="inputContainerG">
            <input
              type="range"
              name="scroll"
              min="0"
              onChange={handleScrollRangeCul}
              value={scrollValCul}
              max={scrollCul}
            />
          </div>
        </MyMobile>
      </div>
    </div>
  );
};

export default Groups;
