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
            <div id="updates_first_section" data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
                <h1>Updates</h1>
                <div id="update_content">
                    <div id="update_content_data">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum duis enim parturient et, a cursus elit enim egestas.
                         <br/> <a>Know More</a>
                    </p>
                    
                    </div>
                    <div id="update_content_data">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum duis enim parturient et, a cursus elit enim egestas.
                         <br/> <a>Know More</a>
                    </p>
                    
                    </div>
                    <div id="update_content_data">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum duis enim parturient et, a cursus elit enim egestas.
                         <br/> <a>Know More</a>
                    </p>
                    
                    </div>
                    <div id="update_content_data">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum duis enim parturient et, a cursus elit enim egestas.
                         <br/> <a>Know More</a>
                    </p>
                    
                    </div>
                    
                    

                </div>
            </div>
            <div id="updates_image" data-aos="fade-left"  data-aos-offset="300" data-aos-easing="ease-in-sine">
            <img alt="img" src={Updateimage} />
            </div>

        </div></>
        )
    }}
    export default Updates;