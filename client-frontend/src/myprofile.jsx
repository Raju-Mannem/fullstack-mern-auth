import React,{useContext, useState,useEffect} from 'react'
import {redirect} from 'react-router-dom';
import { store } from './App'
const Myprofile = () => {
    const [token,setToken]=useContext(store);
    const[data,setData]=useState(null);
    useEffect(()=>{
        axios.get('http://localhost:5173/myprofile',{
            headers: {
                'x-token':token
            }
        }).then(res=>setData(res.data)).catch((err)=>console.log(err))
    },[])
    if(!token){ return redirect("/login") }
  return (
    <div>
        {
        data &&
        <center>Wecole to dashboard :  {data.username}</center>
    }
        </div>
  )
}
export default Myprofile