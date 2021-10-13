import React from "react";

import "./Accordion.css";
import ScholarshipImage from "./Assets/scholarshipImage.png";

function Accordion_segment() {
  return (
    <div className="accordion_segment_container">
      <h2 className="accordion_segment_header">Scholarships</h2>
      <div className="content_box">
        <div className="accordion">
          <div>
            <input type="checkbox" id="section1" class="accordion_input" />
            <label for="section1" class="accordion__label">
              <ul className="accordion_segment_section">
                <li>Meritcum Means Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>lorem psum dolor sit amet</p>
              <a href="/">Know more...</a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section2" class="accordion_input" />
            <label for="section2" class="accordion__label">
              <ul className="accordion_segment_section">
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
              <ul className="accordion_segment_section">
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
              <ul className="accordion_segment_section">
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
              <ul className="accordion_segment_section">
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
              <ul className="accordion_segment_section">
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
              <ul className="accordion_segment_section">
                <li>Aditya Birla Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content accordion_last_section">
              <p>lorem psum dolor sit amet</p>
              <a href="/">Know more...</a>
            </div>
          </div>
        </div>

        <div className="image_box">
          <img src={ScholarshipImage} alt="ScholarshipImage" height="400" />
        </div>
      </div>
    </div>
  );
}

export default Accordion_segment;
