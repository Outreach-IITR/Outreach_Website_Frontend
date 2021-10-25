// ************* Created by Sarveshwar Pandey************

import React, { Component } from 'react'
import './Startups.css'
import tides from './Assets/tides.png'
import ecell from './Assets/ecell.png'
import companies from './Assets/companies.png'
export class Startups extends Component {
    render() {
        return (
            <div id="achievement_startups">
                <div id="startups_first">
                    <h2>Startups</h2>
                    <p>Among all its astounding cultures, IIT-R also has a growing startup culture. To foster this culture there are various startup incubators at R-Land. If you desire to enter the field of entrepreneurship, IIT-R will provide you with a strong platform. 
                    </p>
                </div>
                <div id="startups_tides">
                    <div id="tides_detail">
                    <h1 id="tides_mobileview">Tides Incubator</h1>
                        <div id="tides_logo">
                             <img alt="img" src={tides} />
                        </div>
                        <div id="tides_content">
                            <h1 id="tides_mobilenone">Tides Incubator</h1>
                            <p>Technology Incubation & Entrepreneurship Development Society(TIDES), a business incubator at R-Land is what one needs to grow their startup. From providing funding to giving guidance, TIDES provides it all. We can assure you that at R-Land, your dream of growing a startup won’t be left unchecked.</p>
                        </div>
                    </div>
                    <div id="brand">
                        <img alt="img" src={companies}></img>
                    </div>
                </div>
                <div id="startups_ecell">
                <div id="ecell_detail">
                <h1 id="tides_mobileview">E Cell</h1>
                        <div id="ecell_logo">
                             <img alt="img" src={ecell} />
                        </div>
                        <div id="ecell_content">
                            <h1 id="ecell_mobilenone">E cell</h1>
                            <p>
                            Entrepreneurship Cell, a campus group at IIT-R is committed to nurturing the ideas of budding entrepreneurs. If you want to dive into the field of entrepreneurship, E-Cell will mentor you, instill hunger for growth, team spirit, and other qualities in you. 
                        </p>
                        </div>
                        </div>
                    <div id="brand">
                        <img alt="img" src={companies}></img>
                    </div>
                </div>
                <div id="startups_alumni">
                    <h1>From Alumni Network</h1>
                <div id="brand">
                    <img alt="img" src={companies}></img>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Startups
