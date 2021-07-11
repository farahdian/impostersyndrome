import React from 'react';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css'
import { auth } from './firebase';
import {useDispatch} from 'react-redux';
import {logout} from './features/userSlice'




    function Header() {
   const dispatch = useDispatch();


    const logoutOfApp = ()=>{
        dispatch(logout());
        auth.signOut();

    };
return (
        <div className="Header">



 <div className="header__left"> 
<i id="logo"class="fab fa-linkedin"></i>
<i class="fas fa-search"></i>
<input type="text"></input>
</div>

<div className="header__right">
<HeaderOption Icon={HomeIcon} title="Home"/>
<HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
<HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
<HeaderOption Icon={TextsmsIcon} title="Messaging"/>
<HeaderOption Icon={NotificationsIcon} title="Notifications"/>
<HeaderOption avatar={true}onClick={logoutOfApp}/>
</div>


            
        </div>
    )
}

export default Header
