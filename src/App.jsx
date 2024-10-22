import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import ProfileUser from "./components/ProfileUser";
import Card from "./components/Card";


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/card"  element={<Card/>}/>
      <Route path="/Profile"   element={<Profile/>}/>
      <Route path="/contact"   element={<Contact/>}/>
      <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
      <Route path="/userprofile"   element={<ProfileUser/>}/>

    </Routes>
    
      
    </BrowserRouter>
  )
     
}


export default App;