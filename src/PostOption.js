import React from 'react';
import './PostOption.css'


function PostOption({Icon, title, onclickact, color}) {

   
        return (
            <div className="postOption" onClick={onclickact}>
                <Icon className='postOption__Icon' style={{color:color}}/>
                <h5 className='postOption__title'>{title}</h5>
                
            </div>
        )

}

export default PostOption
