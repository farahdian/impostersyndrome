import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';


function Sidebar() {
    const topics =["hci", "psychology", "art", "programing"]

    return (
        <div clasName="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp3.licdn.com/dms/image/C5616AQFQjU7S_CwuNw/profile-displaybackgroundimage-shrink_200_800/0/1603536522883?e=1631145600&v=beta&t=o8NgD7--LA_TPyBc81cVPu8H6UyU2xp-yYiOTNj0gwI" alt="hand in mirror"></img>
         
          < Avatar className="sidebar__avatar"/>
          <h6>Farah Dianputri</h6>

       
          <h7>Programming Intern at PeasyAI</h7>
          </div>

        
          

          <div className="sidebar__stats">
              <div className="sidebar__stat">
              <p>Who viewed your profile</p>
             <p className="sidebar__statNumber">65</p>

              </div>
            

              <div className="sidebar__stat">
              <p>Who viewed your profile</p>
             <p className="sidebar__statNumber">65</p>
                  
             

              </div>
              </div>
              <div className="sidebar__bottom">

        
            <p>Recent</p>
            {topics.map(topic =>(
                    <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span><p>{topic}</p>
                    </div> 
            ))}

       
            
        </div>
        </div>
    )
}

export default Sidebar
