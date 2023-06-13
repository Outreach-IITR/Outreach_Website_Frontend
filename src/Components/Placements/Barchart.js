import React from "react";
import "./Barchart.css"
import {Bar} from "react-chartjs-2"
import BarChart_alt from "./Assets/P_19-20.jpg"

const BarChart = (props) => {
  return (
    <>
      <div className="Barchart_heading">
        <h1>{props.heading}</h1>
      </div>
      <div className="Barchart_placement">
        {/* <canvas></canvas> */}
        <Bar
          data={{
            labels: [
              "Applied Mathematics",
              "Architecture & Planning",
              
              "Biotechnology/BSBE",
              "Chemical Engineering",
              "Chemistry",
              "Civil Engineering",
              "Computer Science and Engineering",
              "Earth Science",
              "Electrical Engineering",
              "Electronics and communication engineering",
              
              "M.B.A",
              "Mechanical Engineering",
              "Metallurgical and Materials Engineering",
              "Master of Technology",
              "Physics",
              "Polymer Science",
              "Production and Industrial Engineering",
              
              
            ],
            datasets: [
              {
                label: "Median CTC",
                data: [
                  20.75, 11.16,  12.996, 17.67, 5.5, 13.5, 33, 12.978, 27, 21,7, 14.42,
                  13, 11.69, 27.665,15, 15, 
                ],
                backgroundColor: "#009082",
              },
            ],
          }}
          height={600}
          width={200}
          options={{
            // responsive: true,
            tooltips: {
              displayColors: false,
              // bodyFontSize: 10,
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
      <div id="alt_barchart">
        <img src={BarChart_alt} alt="Barchart"></img>
      </div>
    </>
  );
};
export default BarChart;
