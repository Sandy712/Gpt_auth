import React, { useState } from 'react';
import "./Signup.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/register', {
                auth_username: username,
                email: email,
                auth_password: password
            });

            alert('Success!');
            setUsername('');
            setEmail('');
            setPassword('');
            navigate('/login');

        } catch (error) {
            setUsername('');
            setEmail('');
            setPassword('');
            console.log("Error in registration!");
        }

    };

    return (
        <div className="container" style={{ height: "70%" }}>
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register</h2>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Signup;
