import React from "react";
import "./Barchart.css"
import {Bar} from "react-chartjs-2"
import BarChart_alt from "./Assets/P_20-21.jpg"

const BarChart20_21 = props => {
    return(<>
    <div className="Barchart_heading"><h1>{props.heading}</h1></div>
    <div className="Barchart_placement">
            {/* <canvas></canvas> */}
            <Bar
            data={{
                
                labels: ['Applied Mathematics','Architecture & Planning','Biotechnology/BSBE','Chemical Engineering','Chemistry','Civil Engineering','Computer Science and Engineering','Earth Science','Electrical Engineering','Electronics and communication engineering','M.B.A','Mechanical Engineering','Metallurgical and Materials Engineering','Master of Technology','Physics','Polymer Science','Production and Industrial Engineering' ],
                datasets: [
                  {
                    label: 'Median CTC',
                    data: [24.3,10,11,13.7,5.5,13.6,27.5,12.978,20,20,7,13,16,13,13.5,11.1,15],
                    backgroundColor: '#31356E',
                   
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
export default BarChart20_21;