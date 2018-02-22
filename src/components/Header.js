import React from 'react'
import logo from '../assets/logo-orange-and-white.png'
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='logo-title'>
        <img src={logo} className='logo' alt='logo' />
        <h1 className='leaderboard'>LEADERBOARD</h1>
      </div>
    </div>
  )
}

export default Header