import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core'
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'

function HeaderOption({Icon, title, avatar, onClick, }) {
    const user = useSelector(selectUser)

   
        return (
            <div onClick={onClick} className="headerOption">
                {Icon &&<Icon className='headerOption__Icon'/>}
                {avatar && <Avatar>{user?user.email[0]: ""}</Avatar>}
                <h5 className='headerOption__title'>{title}</h5>
                
            </div>
        )

}

export default HeaderOption
