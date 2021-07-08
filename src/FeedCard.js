import React from 'react'
import { Avatar } from '@material-ui/core'
import './FeedCard.css'

function FeedCard({user, followers, postTime, text, imgSrc, title, subtitle}) {
    return (
        <div className="feedcard">
            <div className="feedcard__head">
            <Avatar variant="square" />
            <div className="feedcard__headtext">
            <h2>{user}</h2>
            <span><p>{followers}</p>followers</span>
            <p>{postTime}</p>
            </div>
            </div>
            <div className="feedcard__main">
                <p>{text}</p>
                <img src={imgSrc} alt="post pic"></img>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>

           
            
        </div>
    )
}

export default FeedCard
