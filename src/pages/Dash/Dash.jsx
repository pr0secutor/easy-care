import React from 'react'
import styles from './dash.module.css'
import FileItem from './FileItem'

const Dash = () => {
  return (
    <>
        <header className={styles.top}>
            <h1>EasyCare</h1>
        </header>
    <div className={styles.dash}>
        <h2>Dashboard</h2>
        <div className={styles.dash_btm}>
            <h3 className={styles.username}>USERNAME</h3>
            <button className={styles.button_add}>ADD</button>
        </div>
        <div className={styles.data}>
            <FileItem fileName='Lornjkdnak' fileCreatedAt='23/07/2022'/>
        </div>
    </div>    
    </>
  )
}

export default Dash