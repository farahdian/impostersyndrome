/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react'
import './Feed.css'
import { Avatar } from '@material-ui/core'
import PostOption from './PostOption'
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DescriptionIcon from '@material-ui/icons/Description';
import FeedCard from './FeedCard';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
    const [input, setInput] = useState('');
    const [ posts, setPosts] = useState([]);
    
    
    
    useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
    setPosts(
        snapshot.docs.map((doc) =>({
        id: doc.id,
        data: doc.data(),
        }))
    )
    );
}, []);


    const sendPost = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            user: "Farah Dianputri",
            postTime:firebase.firestore.FieldValue.serverTimestamp(),
            text: input,
            imgSrc: "",
            title: "",
            subtitle: "",

        });
    };


    return (
        <div className="feed">
            <div className="feed__post">
                <div className="feed__postInput">
                <Avatar />
                <input value={input} onChange={e=>setInput(e.target.value)}type="text"></input>
                <button type="submit"onClick={sendPost}>Post</button>
                </div>
                <div className="feed__postOptions">
                <PostOption Icon={PhotoIcon}title="Photo"/>
                <PostOption Icon={YouTubeIcon}title="Video"/>
                <PostOption Icon={CalendarTodayIcon} title="Event"/>
                <PostOption Icon={DescriptionIcon}title="Write an article"/>
                </div>
            </div>
            <div className="feed__features">
            
            {posts.map(({id, data:{user, postTime, text}})=>(
            <FeedCard
            key={id}
            user={user}
            postTime={postTime}
            text={text}
            />))
            }

        


            <FeedCard user="New York Times" followers="1110" postTime="3 hrs" text="Facing grueling 72-hour work weeks and rising housing prices, many young people in China fear they will be the first generation not to do better than their parents. They are now defying the country’s long-held prosperity..." imgSrc="https://media-exp3.licdn.com/dms/image/sync/C5634AQFqpU0f3HVt-Q/ugc-proxy-shrink_800/0/1625742007899?e=1625842800&v=beta&t=bPOMzrRLR0FOzJhi3qlDfsVHK6oyRfu6ag6X-7-AIVo" title="Chinese Millenials are Chilling and Beijing isn't happy about that" subtitle="nytimes.com"/>
            </div>
            <FeedCard user="That person from your high school" followers="50" postTime="2 mins" text="So proud to have achieved more than you. I'm not trying to brag just stating facts"></FeedCard>

           
        </div>
    )
}

export default Feed
