import React from 'react';
import './PostOption.css'


function PostOption({Icon, title, onclickact}) {

   
        return (
            <div className="postOption" onClick={onclickact}>
                {Icon &&<Icon className='postOption__Icon'/>}
                <h5 className='postOption__title'>{title}</h5>
                
            </div>
        )

}

export default PostOption
