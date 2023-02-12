import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Login from './pages/Login/Login'
import Dash from './pages/Dash/Dash';
import Approve from './pages/Aproove/Approve';
import Doctor from './pages/Doctor/Doctor';
import Insurance from './pages/Insurance/Insurance';
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dash' element={<Dash/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/approve' element={<Approve/>} />
          <Route path='/doctor' element={<Doctor/>} />
          <Route path='/insurance' element={<Insurance/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
