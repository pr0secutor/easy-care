import React from 'react'
import { Link } from 'react-router-dom'
import styles from './dash.module.css'

const FileItem = (props) => {
  return (
    <div className={styles.file_item}>
        <div className={styles.meta_data}>
            <h3>File Name  {props.fileName}</h3>
            <h3>Created At  {props.fileCreatedAt}</h3>
        </div>
        <div className={styles.actions}>
        <Link id='approve' to='/approve' style={{marginRight:32}}><button className={styles.action_button}>Aproove</button></Link>
            <button className={styles.action_button}>View</button>
            <button className={styles.action_button}>Del</button>
        </div>
    </div>
  )
}

export default FileItem