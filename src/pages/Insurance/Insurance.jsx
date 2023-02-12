import React from 'react'
import styles from './Insurance.module.css'

const Insurance = () => {
  return (
    <>
    <div class={styles.background}>
      <div class={styles.shape}></div>
      <div class={styles.shape}></div>
    </div>
    <form>
      <h3>Insurance Company Dashboard</h3>

      <label for="File">File id</label>
      <input type="text" placeholder="Enter File id" id="Fileid" />

      <button>View</button>
    </form>
    </>
  )
}

export default Insurance