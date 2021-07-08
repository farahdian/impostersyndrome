import React from 'react';
import Header from './Header';

import './App.css';

function App() {
  return (
    <div className="App">
  <Header/>
     

      <div id="main" className="row align-items-start">

      <div id="profile-col" className="col">
        <div id="procard"className="card">
          <img className="propic"src="https://media-exp3.licdn.com/dms/image/C5603AQG6mqz_a-v6MQ/profile-displayphoto-shrink_400_400/0/1603536257994?e=1631145600&v=beta&t=zGdZhIXTS0lkf7eBK8WoIHCU8ziK_dAPyJgzoXEBIaY" alt="profilepic"></img>
          <h6>Farah Dianputri</h6>
          <h7>Programming Intern at PeasyAI</h7>
          <span>Who viewed your profile 61</span>
          <span>Views of your post 916</span>
          <span>Try Premium for Free</span>
          <span><i class="fas fa-bookmark"></i>My items</span>
        </div>
      </div>


      <div id="feed" className="col">
        <div id="post">
        <img className="propic"src="https://media-exp3.licdn.com/dms/image/C5603AQG6mqz_a-v6MQ/profile-displayphoto-shrink_400_400/0/1603536257994?e=1631145600&v=beta&t=zGdZhIXTS0lkf7eBK8WoIHCU8ziK_dAPyJgzoXEBIaY" alt="profilepic"></img>
        <button>Start a post</button>
        <br></br>
        <span>Photo</span>
        <span>Video</span>
        <span>Event</span>
        <span>Write article</span>
        </div>
        <div className="postcard">
          <div className="card">
            <span>So and so likes this</span>
            <img className="propic"src="https://media-exp3.licdn.com/dms/image/C5603AQG6mqz_a-v6MQ/profile-displayphoto-shrink_400_400/0/1603536257994?e=1631145600&v=beta&t=zGdZhIXTS0lkf7eBK8WoIHCU8ziK_dAPyJgzoXEBIaY" alt="profilepic"></img>
            <h7>The Courtauld Institute of Art</h7>
            <span>14.900 followers</span>
            <img alt="Yinke Shonibare and Julian Agnew" src="https://media-exp3.licdn.com/dms/image/sync/C4D27AQHKyKB8ggVFAA/articleshare-shrink_800/0/1625659456230?e=1625752800&v=beta&t=VNFcEgo-CTWYyiO3tgEtSwLaNiK2xEg8Gs63OvAGNLo"></img>
            <a href="https://courtauld.ac.uk/news-blogs/posts/shonibare-agnew-honours/">Yinka Shonibare CBE RA and Julian Agnew awarded honours by The Courtauld</a>
            <span><i class="far fa-thumbs-up"></i>Like<i class="far fa-comment-dots"></i>Comment<i class="fas fa-share"></i>Share<i class="far fa-paper-plane"></i>Send</span>
            
          


          </div>
        </div>

      </div>

      <div id="misc-col" className="col">
        <div id="top"className="card">
          <h7>Today's top courses</h7>
          <ul>
            <li>Creativity at Work</li>
            <li>Communicating Empathy</li>
            <li>Effective Listening</li>
          </ul>

        </div>
      </div>
      
      </div>
    </div>
  );
}

export default App;
