import React, {forwardRef} from 'react'
import { Avatar } from '@material-ui/core'
import './FeedCard.css'
import PostOption from './PostOption'
import LikeButton from './LikeButton'

import SmsIcon from '@material-ui/icons/Sms';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';


const FeedCard = forwardRef(({id, user, text, imgSrc}, ref) => {
    return (
        <div ref={ref} key={id} className="feedcard">
            <div className="feedcard__head">
            <Avatar />
            <div className="feedcard__headtext">
            <h2>{user}</h2>
            </div>
            </div>
            <div className="feedcard__main">
            <p>{text}</p>
            {imgSrc? <img src={imgSrc} alt={text}></img>: ""}
               
            </div>
                 <div className="feedcard__react">
                     <LikeButton />

               
            
                 <PostOption Icon={SmsIcon} title="Comment"/>
                 <PostOption Icon={ShareIcon} title="Share"/>
                 <PostOption Icon={SendIcon} title="Send"/>
        
                 </div>
                 

           
            
        </div>
    )
})

export default FeedCard
