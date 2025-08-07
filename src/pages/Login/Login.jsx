import React, { useEffect, useRef, useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState, setSignState] = useState('Sign In');

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
        <form>
          {signState==='Sign Up' ? <input type="text" placeholder='Your Name' /> : <></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>{signState}</button>
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
