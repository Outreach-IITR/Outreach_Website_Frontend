import React, { Component } from 'react'
import Ellipse from './Assets/Ellipse.png'
import './HigherStudiesOptions.css'

export class HigherStudiesOptions extends Component {
    render() {
        return (
            <div id="EllipseContent">
                <div id="image">
                    <div className="ellipseImage">
                        <img src={Ellipse} />
                    </div>

                    <h4 className="ellipseNumber">{this.props.num}</h4>
                </div>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default HigherStudiesOptions
