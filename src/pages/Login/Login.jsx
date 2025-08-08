import React, { useEffect, useRef, useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { signup, login } from '../../firebase'

const Login = () => {
  const [signState, setSignState] = useState('Sign In');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserAuth = async (event) => {
    event.preventDefault();
    if(signState === 'Sign In'){
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  }


  const handleSignStateChange = () => {
    setSignState(signState === 'Sign Up' ? 'Sign In' : 'Sign Up');
  }

  const renderFormHelp = () => {
    return (
      signState === 'Sign In' ? <p>New to Netflix? <span onClick={handleSignStateChange}>Sign Up Now</span></p> : <p>Already have account? <span onClick={handleSignStateChange}>Sign In</span></p>
    )
  }

  return (
    <div className='login'>
      <img src={logo} alt="Netflix Logo" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleUserAuth}>
          {signState==='Sign Up' ? <input value={name} onChange={(event) => {setName(event.target.value)}} type="text" placeholder='Your Name' /> : <></>}
          <input value={email} onChange={(event) => {setEmail(event.target.value)}} type="email" placeholder='Email' />
          <input value={password} onChange={(event) => {setPassword(event.target.value)}} type="password" placeholder='Password' />
          <button type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {renderFormHelp()}
        </div>
      </div>
    </div>
  )
}

export default Login
