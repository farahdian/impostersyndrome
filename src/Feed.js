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
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'

function Feed() {
    const [input, setInput] = useState('');
    const [ posts, setPosts] = useState([]);
    const user = useSelector(selectUser)
    
    
    
    useEffect(() => {
        db.collection("posts").orderBy("postTime","desc").onSnapshot(snapshot => (
    
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, []);


    const sendPost = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            user: user.displayName,
            postTime:firebase.firestore.FieldValue.serverTimestamp(),
            text: input,
        });
        setInput('')
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


            
            
            {posts.map(({id, data: {user, text}}) =>(
             
                <FeedCard
                key={id}
                user={user}
                text={text}
                />
        ))
            }
            </div>
           
        </div>
    );
}

export default Feed
