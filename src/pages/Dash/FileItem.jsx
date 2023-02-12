import React from 'react'

const FileItem = (props) => {
  return (
    <div className='file-item'>
        <div className='meta-data'>
            <h3>File Name  {props.fileName}</h3>
            <h3>Created At  {props.fileCreatedAt}</h3>
        </div>
        <div className='actions'>
            <button className='button'>Aproove Acees</button>
            <button className='button'>View</button>
            <button className='del  button'>Del</button>
        </div>
    </div>
  )
}

export default FileItem