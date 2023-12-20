import React from 'react'
import { Link } from 'react-router-dom'

const timerPage = () => {
  return (
    <div className='timer'>
    <h1>TimerPage</h1>
    <p><Link to="/learn/addnotes" >Add your Notes</Link></p>
    </div>
  )
}

export default TimerPage