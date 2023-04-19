import React from 'react'
import { useLocation } from 'react-router-dom'

const DisplayProfile = () => {
    const recieved=useLocation()
    console.log("===>",recieved.state.fName);
  return (
    <div>
        <h2>profile</h2>
    </div>
  )
}

export default DisplayProfile