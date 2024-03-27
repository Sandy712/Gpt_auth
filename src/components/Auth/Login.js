import React, { useState} from 'react';
import "./Login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navi = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                auth_username: username,
                auth_password: password
            });

            alert("Successfully login!");
            localStorage.setItem('token', response.data.token);

            setUser({token:response.data.token});
            navi('/');

        } catch (error) {
            alert("Login failed!");
            console.log("Incorrect cred!");
        }
        setUsername('');
        setPassword('');

    };



    return (
        <div className='container' style={{ height: "70%" }}>
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
