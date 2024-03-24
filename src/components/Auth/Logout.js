import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setuser }) => {
    const navi = useNavigate();

    const handleLogout = async () => {
        try {
            // Make POST request to Flask backend to logout
            await axios.post('http://localhost:5000/logout');

            setuser(null);
            navi('/login');

        } catch (error) {
            console.error('Logout error:', error.response.data);
        }
    };
    console.log('setuser:', setuser);

    return (
        <div className='container' style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "50%" }}>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
