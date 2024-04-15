import React from 'react'
import fotos from './arthur-morgan.jpg'
import './Arthur.css'
import { Link } from 'react-router-dom'

const Arthur = () => {
    return (
        <div className='Arthur'>
            <div className='Arthur-Text'>
                <h1>ALL GAMES</h1>
                <p>
                    Games are a magic key that transforms seriousness into fun.
                    While they increase our resistance to life's challenges,
                    they revive the adventurous spirit within us.
                </p>
                <Link to="allgames"><button>MORE</button></Link>
            </div>
            <div className='Arthur-Foto'>
                <img src={fotos} alt="arthur" />
            </div>
        </div>
    )
}

export default Arthur