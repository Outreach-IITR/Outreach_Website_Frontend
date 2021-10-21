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
              <p>
                This scholarship is for those students who maintain an annual
                C.G.P.A above 7.5(First yearites however, are judged on the
                basis of their JEE rank, which has to be under 10,000) and whose
                family income is less than 5 LPA. The beneficiary gets Rs. 1000
                per month for 10 months.
              </p>
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
              <p>
                This scholarship is awarded to meritorious students (AIR under
                300) with a monthly stipend of Rs. 25000.
              </p>
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
              <p>
                This scholarship is offered exclusively to students enrolled in
                basic science streams a.k.a Integrated MSc courses with a 4
                digit JEE AIR or less. Eligible candidates may avail 80000/-
                every year.
              </p>
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
              <p>
                Fourth yearites are eligible to apply for this scholarship and
                their track record for the preceding three years is taken into
                account while giving out the scholarship which is of Rs 50000.
              </p>
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
              <p>
                These awards recognize students for outstanding academic, co and
                extra curricular achievements. The award amount is based on the
                donor pool.
              </p>
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
              <p>
                The scholarship is a medium to motivate girls to perform
                excellently and acquire leadership roles in computing and
                technology. Google chooses the girls on the basis of their
                academic and leadership qualities.
              </p>
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
              <p>
                Aditya Birla Scholarship is available to the top 20 students(JEE
                Rank -wise) in the institute. . ABS scholars receive a sum of
                1,00,000/- annually.
              </p>
              <a href="/">Know more...</a>
            </div>
          </div>
        </div>

        <div className="image_box">
          <img
            className="scholarshipImage"
            src={ScholarshipImage}
            alt="ScholarshipImage"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion_segment;
