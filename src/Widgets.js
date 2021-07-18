import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Today's top courses</h2>
                <InfoIcon className="infoicon"/>
               


            </div>
            <ol>
                    <li>Learning Active Listening </li>
                    <li>Learning Graphic Design</li>
                    <li>Giving your Elevator Pitch</li>
                </ol>
                <p>Show more from LinkedIn Learning</p>
            
            
            
        </div>
    )
}

export default Widgets
