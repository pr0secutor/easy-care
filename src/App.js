import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Aproove from './pages/Aproove/Aproove';
import Approve from './pages/Aproove/Aproove';
import Doctor from './pages/Doctor/Doctor';
import File_Upload from './pages/File-Upload/File_Upload';
import Insurance from './pages/Insurance/Insurance';
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Profile/>} />
          <Route path='/approve' element={<Aproove/>} />
          <Route path='/doctor' element={<Doctor/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
