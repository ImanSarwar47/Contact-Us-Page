import React from 'react'
import './Navigation.css'
const Navigation = () => {
  return (
    <nav className='container nav-bar'>
      <img src='logo.png' />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation