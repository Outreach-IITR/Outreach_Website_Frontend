import React, { Component } from "react";
import "./Barchart.css"
import {Bar} from "react-chartjs-2"
import BarChart_alt from "./Assets/BarChart.png"

const BarChart = props => {
    return(<>
    <div className="Barchart_heading"><h1>{props.heading}</h1></div>
    <div className="Barchart_placement">
            {/* <canvas></canvas> */}
            <Bar
            data={{
                
                labels: ['Applied Mathematics','Architecture & Planning','B.Tech (Process Engineering) and M.B.A','Biotechnology','Chemical Engineering','Chemistry','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Electronics and communication engineering','Mechanichal Engineering','Metallurgical and Materials Engineering','Engineering Physics','Production and Industrial Engineering','Polymer Science','Master of Technology','Earth Science'],
                datasets: [
                  {
                    label: 'Median CTC',
                    data: [20.75,11.16,7,12.996,17.67,5.5,13.5,33,27,21,14.42,13,27.665,15,15,11.69,12.978],
                    backgroundColor: '#009082',
                   
                  }
                ],
              }}
              height={600}
              width={200}
              options={{
                // responsive: true,
                  tooltips:{
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
}
export default BarChart;