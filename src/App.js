import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import {useSelector, useDispatch } from 'react-redux';
import Login from './Login'

import './App.css';
import { login, selectUser, logout } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  /*useEffect is a React hook that fires off your code as soon as your page loads */

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName:userAuth.displayName,

      }
        
      ))

      }else{

        dispatch(logout());
      }
    })
    return () => {
      
    }
  }, [])


  return (
    <div className="App">
    <Header/>

     
    { user? <div className="app__body" >

      
      <Sidebar />
      <Feed />



      </div>: 
      <Login/> 
    }
      
    </div>
  );
}

export default App;
