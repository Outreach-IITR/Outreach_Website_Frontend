import React from "react";

import "./Accordion.css";
import ScholarshipImage from "./Assets/scholarshipImage.png";

function Accordion_segment() {
  return (
    <div id="Scholarships" className="accordion_segment_container">
      <h2 className="accordion_segment_header">Scholarships</h2>
      <div className="content_box">
        <div className="accordion">
          <div>
            <input type="checkbox" id="section1" className="accordion_input" />
            <label htmlFor="section1" className="accordion__label">
              <ul className="accordion_segment_section">
                <li>Meritcum Means Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>
                A UG student who is an MCM scholarship beneficiary gets tuition
                fee reimbursement and additionally ₹1000 per month for 10
                months. Whereas an MSc. student who is an MCM scholarship
                beneficiary gets ₹1000 per month for 10 months.
              </p>
              <a href="https://scsp.iitr.ac.in/merit-cum-means-2021/">
                Know more...
              </a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section2" className="accordion_input" />
            <label htmlFor="section2" className="accordion__label">
              <ul className="accordion_segment_section">
                <li>James Thomason Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>
              Students having up to 250 All India Rank in JEE (Advanced) 2021 are eligible for the prestigious James Thomason Scholarship, which includes a stipend of ₹25,000 per month

              </p>
              <a href="https://scsp.iitr.ac.in/james-thomason-scholarship/">
                Know more...
              </a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section3" className="accordion_input" />
            <label htmlFor="section3" className="accordion__label">
              <ul className="accordion_segment_section">
                <li>Inspire Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>
                This scholarship is offered exclusively to students enrolled in
                basic science streams a.k.a Integrated MSc courses with a 4
                digit JEE AIR or less. Eligible candidates may avail 80,000 INR
                every year.
              </p>
              <a href="https://scsp.iitr.ac.in/inspire-scholarship/">
                Know more...
              </a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section4" className="accordion_input" />
            <label htmlFor="section4" className="accordion__label">
              <ul className="accordion_segment_section">
                <li>Encore Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>
                Eighty Nine Class of Roorkee Endowment (ENCORE) is an endowment
                fund established by the IIT Roorkee graduating class of 1989 for
                the benefit of the Institute, its students, faculty and staff.
              </p>
              <a href="https://sites.google.com/site/iitrencore89/">
                Know more...
              </a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section5" className="accordion_input" />
            <label htmlFor="section5" className="accordion__label">
              <ul className="accordion_segment_section">
                <li>Heritage Awards</li>
              </ul>
            </label>
            <div className="accordion_content">
              <p>
                For young IIT-R graduates, IITRHF provide variety of support in
                their early years of career development; help develop their
                skills and self-confidence through interaction with their peers.
              </p>
              <a href="https://www.iitr-heritagefund.org/">Know more...</a>
            </div>
          </div>

          <div>
            <input type="checkbox" id="section7" className="accordion_input" />
            <label htmlFor="section7" className="accordion__label">
              <ul className="accordion_segment_section">
                <li>Aditya Birla Scholarship</li>
              </ul>
            </label>
            <div className="accordion_content accordion_last_section">
              <p>
                Top 15 students on the basis of their JEE advance rank are
                eligible to apply. Alongwith them 1 student each on the basis of
                merit cum means, and top ranked students each from Mechanical ,
                Electrical, Civil and Chemical Engineering are eligible to
                apply.
              </p>
              <a href="https://www.iitr.ac.in/Main/pages/Aditya_Birla_Scholarship.html">
                Know more...
              </a>
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
