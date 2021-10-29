// ************* Created by Sarveshwar Pandey************

import React, { Component } from 'react'
import './Startups.css'
import tides from './Assets/tides.png'
import ecell from './Assets/ecell.png'
import log9 from './Assets/10log9.png'
import enerlytics from './Assets/enerlytics.png'
import pibit from './Assets/pibit.png'
import madguy from './Assets/madguy.png'
import hindonics from './Assets/hindonics.png'
import razorpay from './Assets/razorpay.png'
import fampay from './Assets/fampay.png'
import vedantu from './Assets/vedantu.png'
import airmeet from './Assets/airmeet.png'
import upgrad from './Assets/upgrad.png'
import inmobi from './Assets/inmobi.png'


export class Startups extends Component {
    render() {
        return (
            <div id="achievement_startups">
                <div id="startups_first">
                    <h2>Startups</h2>
                    <p className="startup_cont" >Among all its astounding cultures, IIT-R also has a growing startup culture. To foster this culture there are various startup incubators at R-Land. If you desire to enter the field of entrepreneurship, IIT-R will provide you with a strong platform.
                    </p>
                </div>

                <div id="startups_ecell">
                    <div id="ecell_detail">
                        <h1 id="tides_mobileview">E Cell</h1>
                        <div id="ecell_logo">
                            <img alt="img" src={ecell} />
                        </div>
                        <div id="ecell_content">
                            <h1 id="ecell_mobilenone">E cell</h1>
                            <p className="startup_cont">
                                Entrepreneurship Cell, a campus group at IIT-R is committed to nurturing the ideas of budding entrepreneurs. If you want to dive into the field of entrepreneurship, E-Cell will mentor you, instill hunger for growth, team spirit, and other qualities in you.
                            </p>
                        </div>
                    </div>

                </div>
                <div id="startups_tides">
                    <div id="tides_detail">
                        <h1 id="tides_mobileview">Tides Incubator</h1>
                        <div id="tides_logo">
                            <img alt="img" src={tides} />
                        </div>
                        <div id="tides_content">
                            <h1 id="tides_mobilenone">Tides Incubator</h1>
                            <p className="startup_cont">Technology Incubation & Entrepreneurship Development Society(TIDES), a business incubator at R-Land is what one needs to grow their startup. From providing funding to giving guidance, TIDES provides it all. We can assure you that at R-Land, your dream of growing a startup won’t be left unchecked.</p>
                        </div>
                    </div>
                    <div id="brand">
                        <img alt="img" src={log9}></img>
                        <img alt="img" src={enerlytics}></img>
                        <img alt="img" src={pibit}></img>
                        <img alt="img" src={hindonics}></img>
                        <img alt="img" src={madguy}></img>
                    </div>

                </div>
                <div id="startups_alumni">
                    <h1>From Alumni Network</h1>
                    <div id="brand">
                        <img alt="img" src={razorpay}></img>
                        <img alt="img" src={fampay}></img>
                        <img alt="img" src={vedantu}></img>
                        <img alt="img" src={airmeet}></img>
                        <img alt="img" src={upgrad}></img>
                        <img alt="img" src={inmobi}></img>
                    </div>
                    <p style={{
                        color: "#3F3F3FBF", textAlign: "center", marginTop: "30px", fontWeight: 600,
                        fontSize: "24px"
                    }}>and counting...</p>
                </div>

            </div>
        )
    }
}

export default Startups
