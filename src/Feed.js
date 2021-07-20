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
import FlipMove from 'react-flip-move';


function Feed() {
    const [input, setInput] = useState('');
    const [imgUrl, setImg] = useState('');
    
    const [ posts, setPosts] = useState([]);
    const [display, setDisplay] = useState(false)
    const user = useSelector(selectUser)

    function toggleDisplay(){
        setDisplay(prevDisplay => !prevDisplay);
    }

    

    
    
    
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
            imgSrc: imgUrl,
         
        });
        setInput('')
        setImg('')
        setVid('')
    };

    

    return (
        <div className="feed">
            <div className="feed__post">
                <div className="feed__postInput">
                <Avatar />
                <input value={input} onChange={e=>setInput(e.target.value)}type="text" placeholder="Write a post"></input>
                {display===true? <input value={imgUrl} onChange={e=>setImg(e.target.value)} type="text" placeholder="Embed an image url"></input>: ""}
               
                <button type="submit"onClick={sendPost}>Post</button>
                </div>
                <div className="feed__postOptions">
                <PostOption color={"#70b5f9"} Icon={PhotoIcon}title="Photo" onclickact={toggleDisplay}/>
                <PostOption color={"#80c260"} Icon={YouTubeIcon}title="Video"/>
                <PostOption color={"#e7a33e"}Icon={CalendarTodayIcon} title="Event"/>
                <PostOption color={"#fc9295"} Icon={DescriptionIcon}title="Write an article"/>
                </div>
                
            </div>
            <div className="feed__features">


            
            <FlipMove>
            {posts.map(({id, data: {user, text, imgSrc}}) =>(
             
                <FeedCard
                key={id}
                user={user}
                text={text}
                imgSrc={imgSrc}
                />
        ))
            }
            </FlipMove>
            </div>
           
        </div>
    );
}

export default Feed
