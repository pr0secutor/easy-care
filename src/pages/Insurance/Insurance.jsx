import React from 'react'
import './Insurance.css'

const Insurance = () => {
  return (
    <>
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
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