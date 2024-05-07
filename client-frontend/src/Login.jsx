import React,{useState,useContext} from 'react'
import axios from 'axios';
import {Navigate } from 'react-router-dom'
import { store } from './App';
const Login = () => {
    const[token,setToken]=useContext(store);
    const [data,setData]=useState({
        email:'',
        password:'',
    })
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
            res=>{setToken(res.data.token);}).catch(error => 
                {console.error('Error occurred during login:', error);});
        };
        if(token) {
            return <Navigate to="/myprofile" replace/>;
        }
  return (
    <div className='reg-div'>
        <h3>login</h3>
        <form  onSubmit={submitHandler} >
        <label htmlFor="email">email</label>
        <input type="email" onChange={changeHandler} name="email" id="email" placeholder="email"/>
        <label htmlFor="password">password</label>
        <input type="password" onChange={changeHandler} name="password" id="password" placeholder="password"/>
        <button type="submit">Login</button>
        </form>
    </div>
  );
};
export default Login;