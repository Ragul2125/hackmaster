import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Image from '../assets/loim.svg';
import logo from '../assets/logo.svg';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle login
    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", formData);
            console.log(response.data);

            // Save token in localStorage
            localStorage.setItem("token", response.data.token);

            alert("Login successful!");
            navigate("/hr/dashboard");
        } catch (err) {
            console.error(err);
            setError("Invalid email or password.");
        }
    };

    return (
        <div className='full-pg'>
            <div className='login-card'>
                <div className='name-sec'>
                    <img src={logo} alt="logo" />
                    <h2>Hr Sync</h2>
                </div>
                <div className='both'>
                    <div className='img'>
                        <img src={Image} alt="login" />
                    </div>
                    <div className='v'>
                        <div className='t'>
                            <h2>Login</h2>
                        </div>
                        <input 
                            type='text' 
                            name="email" 
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <div className='forgot'>
                            <input 
                                type='password' 
                                name="password" 
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <p>Forgot Password?</p>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <div className="btn">
                            <button className='login-btn' onClick={handleLogin}>Login</button>
                            <p className='or'>Or</p>
                            <button className='login-google'>Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
