import React from 'react'
import './Login.css'
import Image from '../assets/loginimg.jpg'
import logo from '../assets/logo.svg'
const Login = () => {
  return (
    <>
        <div className='full-pg'>
            <div className='login-card'>
                <div className='name-sec'>
                    <img src={logo} alt="" />
                    <h2>Hr Sync</h2>
                </div>
                <div className='both'>
                    <div className='img'>
                        <img src={Image}/>
                    </div>
                    {/* <div>
                        <h1>|</h1>
                    </div> */}
                    <div className='v'>
                        <div className='t'>
                            <h2>Login</h2>
                            
                        </div>
                        <input type='text' placeholder='UserName'/>
                        <div className='forgot'>
                             <input type='text' placeholder='Password'/>
                             <p>Forgot Password?</p>
                        </div>
                       
                            {/* <div>
                                <input type='checkbox' id='remember'/>
                                <label htmlFor='remember'>Remember</label>
                            </div> */}
                            
                        
                        <div className="btn">
                        <button className='login-btn'>Login</button>
                        <p className='or'>Or</p>
                        <button className='login-google'>Login with Google</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login