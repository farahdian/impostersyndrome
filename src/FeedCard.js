import React from 'react'
import { Avatar } from '@material-ui/core'
import './FeedCard.css'
import PostOption from './PostOption'
import LikeButton from './LikeButton'

import SmsIcon from '@material-ui/icons/Sms';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';


function FeedCard({id, user, postTime, text,}) {
    return (
        <div key={id} className="feedcard">
            <div className="feedcard__head">
            <Avatar />
            <div className="feedcard__headtext">
            <h2>{user}</h2>
            <p>{postTime}</p>
            </div>
            </div>
            <div className="feedcard__main">
                <p>{text}</p>
            </div>
                 <div className="feedcard__react">
                     <LikeButton />

               
            
                 <PostOption Icon={SmsIcon} title="Comment"/>
                 <PostOption Icon={ShareIcon} title="Share"/>
                 <PostOption Icon={SendIcon} title="Send"/>
        
                 </div>
                 

           
            
        </div>
    )
}

export default FeedCard
