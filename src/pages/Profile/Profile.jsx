import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <>
    <div class={styles.background}>
      <div class={styles.shape}></div>
      <div class={styles.shape}></div>
    </div>
    <form>
      <h3>Patient's Profile</h3>

      <label for="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label for="password">Age</label>
      <input type="number" placeholder="Enter age" id="password" />

      <label for="password">Contact Number</label>
      <input type="text" placeholder="Enter Contact Number" id="password" />

      <Link id='dash' to='/dash'><button>Save</button></Link>
    </form>
    </>
  )
}

export default Profile