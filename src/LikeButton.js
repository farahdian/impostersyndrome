import React, {useState} from 'react';
import './PostOption.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { lightBlue } from '@material-ui/core/colors';



function LikeButton() {
    const [count, setCount] = useState(0);
    const [isLiked, setLikeStatus] = useState(false)

    const addLike = () => {
        setCount(prevCount => prevCount + 1);
        setLikeStatus(true); 

      };
    
   
        return (
            <div className="likeButton" onClick={addLike}>
                { isLiked=== true ? <ThumbUpIcon style={{color:lightBlue[800]}}/>:<ThumbUpIcon/>}
          
                { count? <p>{count}</p>:  <h5 className='likeButton__title'>Like</h5>}
             
               
                
            </div>
        )

}

export default LikeButton
