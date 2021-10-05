import React, { Component } from 'react'
import "./Footer.css";
import facebook from './Assets/facebook.png';
import linkedin from './Assets/linkedin.png';
import outreach_logo from './Assets/outreach_logo.png';
import twitter from './Assets/twitter.png';
import youtube from './Assets/youtube.png';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-subcontent">
                        <h3 className="f-heading h-link" style={{'width':'86px'}}>Quick Links</h3>
                        <ul style={{'list-style' : 'none'}}>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>

                        </ul>
                    </div>
                    <div className="footer-subcontent">
                        <h3 className="f-heading h-acads">Academics</h3>
                        <ul style={{'list-style' : 'none'}}>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>

                        </ul>
                    </div>
                </div>
                <div className="footer-content" >
                    <div className="footer-subcontent">
                        <h3 className="f-heading h-life">Life at IITR</h3>
                        <ul style={{'list-style' : 'none'}}>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>

                        </ul>
                    </div>
                    <div className="footer-subcontent">
                        <h3 className="f-heading h-about">About Us</h3>
                        <ul style={{'list-style' : 'none'}}>
                            <li>About Outreach</li>
                            <li>About IIT Roorkee</li>
                            <li>Outreach Team</li>

                        </ul>
                    </div>
                </div>
            
                <div className="footer-rightcontent">
                    <div className="footer-info">
                        <img src={outreach_logo} width="68px" height="71px" alt="outreach logo"/>
                        <h1 className="h-outreach"><b>OUTREACH</b></h1>
                    </div>
                    <div className="footer-info">
                        <p>
                            <br/>
                            +91 0123456789 <br/>
                            outreach@iitr.ac.in<br/>
                            SAC Building, IIT Roorkee,<br/>
                            Roorkee, Uttarakhand, India - 247667
                        </p>
                    </div>
                    
                    <div className="f-social">
                        <a href="/"><img src={facebook} width="20px" alt="facebook"/></a>
                        <a href="/"><img src={twitter} width="20px" height="" alt="twitter"/></a>
                        <a href="/"><img src={linkedin} width="20px" alt="linkedin"/></a>
                        <a href="/"><img src={youtube} width="20px" height="" alt="youtube"/></a>

                    </div>
                    <div className="footer-bottom">
                        &copy; 2021 Copyright, All rights reserved 
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
