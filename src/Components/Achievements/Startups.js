import React, { Component } from 'react'
import './Startups.css'
import tides from './assets/tides.png'
import ecell from './assets/ecell.png'
import companies from './assets/companies.png'
export class Startups extends Component {
    render() {
        return (
            <div id="achievement_startups">
                <div id="startups_first">
                    <h2>Startups</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ipsum a, diam at. Morbi ipsum, sem integer amet erat varius turpis. Amet, at aliquam iaculis elementum dui nulla lobortis.Est ipsum a, diam at. Morbi ipsum, sem integer amet erat varius turpis. Amet, at aliquam iaculis elementum dui nulla lobortis.
                    </p>
                </div>
                <div id="startups_tides">
                    <div id="tides_detail">
                    <h1 id="tides_mobileview">Tides Incubator</h1>
                        <div id="tides_logo">
                             <img src={tides} />
                        </div>
                        <div id="tides_content">
                            <h1 id="tides_mobilenone">Tides Incubator</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ipsum a, diam at. Morbi ipsum, sem integer amet erat varius turpis. Amet, at aliquam iaculis elementum dui nulla lobortis.Est ipsum a, diam at. Morbi ipsum, sem integer amet erat varius turpis. Amet, at aliquam iaculis elementum dui nulla lobortis.</p>
                        </div>
                    </div>
                    <div id="brand">
                        <img src={companies}></img>
                    </div>
                </div>
                <div id="startups_ecell">
                <div id="ecell_detail">
                <h1 id="tides_mobileview">E Cell</h1>
                        <div id="ecell_logo">
                             <img src={ecell} />
                        </div>
                        <div id="ecell_content">
                            <h1 id="ecell_mobilenone">E cell</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ipsum a, diam at. Morbi ipsum, sem integer amet erat varius turpis. Amet, at aliquam iaculis elementum dui nulla lobortis.Est ipsum a, diam at. Morbi ipsum, sem integer amet erat varius turpis. Amet, at aliquam iaculis elementum dui nulla lobortis.</p>
                        </div>
                        </div>
                    <div id="brand">
                        <img src={companies}></img>
                    </div>
                </div>
                <div id="startups_alumni">
                    <h1>From Alumni Network</h1>
                <div id="brand">
                    <img src={companies}></img>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Startups
