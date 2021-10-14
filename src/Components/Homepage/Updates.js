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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum duis enim parturient et, a cursus elit enim egestas.
                                <br/> <a href="/">Know More</a>
                            </p>    
                            </div>
                        </li>
                        <li>
                            <div id="update_content_data">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum duis enim parturient et, a cursus elit enim egestas.
                                <br/> <a href="/">Know More</a>
                            </p>
                            </div>
                        </li>
                        <li>
                            <div id="update_content_data">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum duis enim parturient et, a cursus elit enim egestas.
                                <br/> <a href="/">Know More</a>
                            </p>
                            </div>
                        </li>
                        <li>
                            <div id="update_content_data">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum duis enim parturient et, a cursus elit enim egestas.
                                <br/> <a href="/">Know More</a>
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