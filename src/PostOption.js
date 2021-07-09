import React from 'react';
import './PostOption.css'


function PostOption({Icon, title}) {

   
        return (
            <div className="postOption">
                {Icon &&<Icon className='postOption__Icon'/>}
                <h5 className='postOption__title'>{title}</h5>
                
            </div>
        )

}

export default PostOption
