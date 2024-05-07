import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { store } from './App';
import vite from '../public/vite.svg'
import react from './assets/react.svg'

const Myprofile = () => {
    const [token, setToken] = useContext(store);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/myprofile', {
            headers: {
                'x-token': token
            }
        })
        .then(res => setData(res.data))
        .catch(err => console.log(err)); // Handle error properly
    }, [token]); // Include token in dependency array

    if (!token) {
        return <Navigate to="/login" replace />; // Redirect to login page if token is not present
    }

    return (
        <div>
            <img className="logo" src={vite} alt="Card image cap" />
            <img className="logo" src={react} alt="Card image cap" />
            {data && <center>Welcome to dashboard: {data.username}</center>}
            <button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button>
        </div>
    );
};

export default Myprofile;
