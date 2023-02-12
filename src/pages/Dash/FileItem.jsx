import React from 'react'
import styles from './dash.module.css'

const FileItem = (props) => {
  return (
    <div className={styles.file_item}>
        <div className={styles.meta_data}>
            <h3>File Name  {props.fileName}</h3>
            <h3>Created At  {props.fileCreatedAt}</h3>
        </div>
        <div className={styles.actions}>
            <button className={styles.button_action}>Aproove Acees</button>
            <button className={styles.button_action}>View</button>
            <button className={styles.button_action}>Del</button>
        </div>
    </div>
  )
}

export default FileItem