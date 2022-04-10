import React, { useState } from 'react';
import '../components/Login.css';
import {useNavigate } from "react-router-dom";



export default function Login() {
  const navigate = useNavigate();
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    console.log(userName);

    if (userName === "ipgautomative" && password === "carmaker") {

      console.log('inside',userName);
      localStorage.setItem("userName",userName)
       navigate('/home') 
      
    } else {
      alert("Incorrect Username OR Password")
    }
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>UserName</h5>
          <input type='text' value={userName} onChange={e => setuserName(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' className='login__signInButton' onClick={signIn} >Sign In</button>
        </form>


      </div>
    </div>
  )

}
