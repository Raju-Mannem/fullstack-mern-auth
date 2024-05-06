import React,{useState,createContext} from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Nav from './Nav'
import Login from './Login';
import Register from './Register';
import Myprofile from './Myprofile';
export const store=createContext();
const App = () => {
  const [token,setToken]=useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/myprofile' element={<Myprofile/>} />
        </Routes>
      </Router>
      </store.Provider>
    </div>
  )
}
export default App