import React from 'react'
import SPIDER from './1206457.png'
import './Gaming.css'
import { Link } from "react-router-dom";

const Gaming = () => {
  return (
    <div className='Gaming'>
      <div className='Gaming-Text'>
        <h1>GAMING</h1>
        <p>Games are the most enjoyable break in life.
          They transcend the boundaries of the real world, free our
          imagination and help us appreciate the moments we share together.</p>
        <button>MORE</button>
      </div>
      <div>
        <img src={SPIDER} alt="spiderman" />
      </div>
    </div>

  )
}

export default Gaming