import React,{useState} from 'react'
import axios from 'axios';
const Register = () => {
    const [data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault();
        console.log(data)
        axios.post('http://localhost:5000/register',data).then(
            (res)=>alert(res.data)
        )
    }
  return (
    <div className='reg-div'>
        <h3>Register</h3>
        <form onSubmit={submitHandler} method="post">
        <label htmlFor="username">Username</label>
        <input type="text" onChange={changeHandler} name="username" id="username" placeholder="username" />
        <label htmlFor="email">email</label>
        <input type="email" onChange={changeHandler} name="email" id="email" placeholder="email"/>
        <label htmlFor="password">password</label>
        <input type="password" onChange={changeHandler} name="password" id="password" placeholder="password"/>
        <label htmlFor="confirmpassword">confirmpassword</label>
        <input type="password" onChange={changeHandler} name="confirmpassword" id="confirmpassword" placeholder="confirmpassword"/>
        <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register