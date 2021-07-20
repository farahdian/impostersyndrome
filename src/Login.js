import React from 'react'
import { auth } from './firebase'
import './Login.css'
import { useState } from 'react'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName ] = useState("")
    const dispatch = useDispatch();

  
const loginToApp =(e)=>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth =>{
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName:userAuth.user.displayName,

        })
    )
    })
    .catch((error)=> alert(error.message));


}

    const register=()=>{
        if(!name) {
            return alert('Please enter a full name');
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=> {
            userAuth.user.updateProfile({
                displayName : name,
            })
            .then(()=> {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:userAuth.user.displayName,

                }))
                
            })
        })
        .catch((error)=> alert(error.message))
    }

    return (
        <div className="login">

          <div className="loginForm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="linkedinlogo"/>
            <h5>Make the most out of your professional life</h5>
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)}type="text" placeholder="Full Name *required to register"></input>
            
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email"></input>
            
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="Password"></input>
              
                <button type="submit" onClick={loginToApp}>Sign In</button>
            
            </form>
            <p>Not a Member?<span className="login__register" onClick={register}> Register Now</span></p>
            </div>

     
        </div>
      
    )
}

export default Login
