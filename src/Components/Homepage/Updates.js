import React from 'react'
import Updateimage from './Assets/updates_home.png'
import './Updates.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

class Updates extends React.Component {
    render() {
        return (
            <><div id="updatessection">
            <div id="updates_first_section" data-aos="fade-up" data-aos-duration="1000">
                <h1>Updates</h1>
                <div id="update_content">
                    <ul>
                        <li>
                            <div id="update_content_data">
                            <p>Under the department of Management studies, IIT Roorkee introduced a new integrated program in Economics.
                                {/* <br/> <a href="/">Know More</a> */}
                            </p>    
                            </div>
                        </li>
                        <li>
                            <div id="update_content_data">
                            <p>The course Applied Mathematics is reframed as Mathematics and Computing offering a BS and MS dual degree.
                                <br/> <a href="https://ma.iitr.ac.in/">Know More</a>
                            </p>
                            </div>
                        </li>
                        <li>
                            <div id="update_content_data">
                            <p>The courses of Int. MSc. Chemistry and Int. MSc. Physics are restructured as Chemical Science and Physics respectively, offering an option to exit after four years.
                                {/* <br/> <a href="/">Know More</a> */}
                            </p>
                            </div>
                        </li>
                        <li>
                            <div id="update_content_data">
                            <p>Next year onwards, a new department for Data Science and Artificial intelligence will be introduced in IIT Roorkee.
                                <br/> <a href="https://www.iitr.ac.in/mfsdsai/pages/index.html">Know More</a>
                            </p>
                            </div>
                        </li>
                        <li>
                            <div id="update_content_data">
                            <p>Team IIT Roorkee has reached its record 7th consecutive ICPC World finals.
                                <br/> <a href="https://pc2.ecs.baylor.edu/scoreboard/">Know More</a>
                            </p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
            <div id="updates_image" >
            <img alt="img" src={Updateimage} />
            </div>

        </div></>
        )
    }}
    export default Updates;