import React from "react";

import "./Accordion.css";
import myimage from "./Assets/myimage.png"

function Accordion_segment() {
  return (
    <div className="container">
      <h2>Scholarships</h2>
      <div className="content_box">
        <div className="accordion">
          <div>
            <input type="checkbox" id="section1" class="accordion_input"/>
            <label for="section1" class="accordion__label">
              <ul>
                <li>Meritcum Means Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>lorem psum dolor sit amet</p>
              <a href="/">Know more...</a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section2" class="accordion_input"/>
            <label for="section2" class="accordion__label">
              <ul>
                <li>James Thomson Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>lorem psum dolor sit amet</p>
              <a href="/">Know more...</a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section3" class="accordion_input" />
            <label for="section3" class="accordion__label">
              <ul>
                <li>Inspire Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>lorem psum dolor sit amet</p>
              <a href="/">Know more...</a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section4" class="accordion_input" />
            <label for="section4" class="accordion__label">
              <ul>
                <li>Encore Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>lorem psum dolor sit amet</p>
              <a href="/">Know more...</a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section5" class="accordion_input" />
            <label for="section5" class="accordion__label">
              <ul>
                <li>Heritage Awards</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>lorem psum dolor sit amet</p>
              <a href="/">Know more...</a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section6" class="accordion_input" />
            <label for="section6" class="accordion__label">
              <ul>
                <li>Google Anita Borg Realtionship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>lorem psum dolor sit amet</p>
              <a href="/">Know more...</a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section7" class="accordion_input" />
            <label for="section7" class="accordion__label">
              <ul>
                <li>Aditya Birla Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>lorem psum dolor sit amet</p>
              <a href="/">Know more...</a>
            </div>
          </div>
        </div>

        <div className="image_box">
          <img src={myimage} alt="myimage" height="400" />
        </div>
      </div>
    </div>
  );
}

export default Accordion_segment;