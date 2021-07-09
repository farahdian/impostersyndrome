import React from 'react'
import { Avatar } from '@material-ui/core'
import './FeedCard.css'
import PostOption from './PostOption'
import { ThumbUp } from '@material-ui/icons'
import SmsIcon from '@material-ui/icons/Sms';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function FeedCard({user, postTime, text, imgSrc, title, subtitle}) {
    return (
        <div className="feedcard">
            <div className="feedcard__head">
            <Avatar />
            <div className="feedcard__headtext">
            <h2>{user}</h2>
            <p>{postTime}</p>
            </div>
            </div>
            <div className="feedcard__main">
                <p className="feedcard__content">{text}</p>
                {imgSrc && title && subtitle?<div className="feedcard__article"><img src={imgSrc} alt="post pic"></img>
                <div className="feedcard__articleinfo">
                 <h2>{title}</h2>
                 <p>{subtitle}</p>
                 </div></div>: <br></br>}
                 <div className="feedcard__react">
                 <PostOption Icon={ThumbUp} title="Likes"/>
                 <PostOption Icon={SmsIcon} title="Comment"/>
                 <PostOption Icon={ShareIcon} title="Likes"/>
                 <PostOption Icon={SendIcon} title="Send"/>
                 </div>
                 
               
            </div>

           
            
        </div>
    )
}

export default FeedCard
