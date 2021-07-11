import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';

function Sidebar() {
    const user = useSelector(selectUser)
    const topics =["hci", "psychology", "art", "programing"]

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://products.ls.graphics/mesh-gradients/images/01.-Royal-Heath.jpg" alt="mesh gradient"></img>
         
          < Avatar className="sidebar__avatar">{user.email[0]}</Avatar>
          <h6>{user.displayName}</h6>

       
          <h6>Programming Intern at PeasyAI</h6>
          </div>

        
          

          <div className="sidebar__stats">
              <div className="sidebar__stat">
              <p>Who viewed your profile</p>
             <p className="sidebar__statNumber">65</p>

              </div>
            

              <div className="sidebar__stat">
              <p>Views of your post</p>
             <p className="sidebar__statNumber">916</p>
                  
             

              </div>
              </div>
              <div className="sidebar__bottom">

        
            <p>Recent</p>
            {topics.map((topic, index )=>(
                    <div key={index} className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span><p>{topic}</p>
                    </div> 
            ))}

       
            
        </div>
        </div>
    )
}

export default Sidebar
