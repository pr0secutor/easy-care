import React from 'react'
import { Link } from 'react-router-dom';
import './Profile.css'

const Profile = () => {
  return (
    <>
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form>
      <h3>Patient's Profile</h3>

      <label for="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label for="password">Age</label>
      <input type="number" placeholder="Enter age" id="password" />

      <label for="password">Contact Number</label>
      <input type="text" placeholder="Enter Contact Number" id="password" />

      <Link id='approve' to='/approve'><button>Save</button></Link>
    </form>
    </>
  )
}

export default Profile