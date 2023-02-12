import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Aproove.module.css'

const Aproove = () => {
  return (
    <>
    <div class={styles.background}>
      <div class={styles.shape}></div>
      <div class={styles.shape}></div>
    </div>
    <form>
      <label for="Address">Address</label>
      <input type="text" placeholder="Address" id="Address" />

      <Link id='approve' to='/doctor'><button>Save</button></Link>
    </form>
    </>
  )
}

export default Aproove