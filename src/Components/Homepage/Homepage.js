import React from 'react'
import RightImage from './Assets/Right_image.png'
import './Homepage.css'

class Homepage extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div id="FirstSection">
                    <div id="FirstSectionContent">
                        <h1>
                            Lorem Ipsum
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, ligula dictum facilisis et morbi aliquet. Egestas diam porttitor faucibus elementum facilisis consequat risus elit.
                        </p>
                        <button id="topButton" className="ui positive basic button">
                            Tap to know more
                        </button>
                    </div>
                    <div>
                        <img alt="img" src={RightImage} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;
