import React from 'react'
import './Header.css'
import logo from './Images/logo.jpg'

const Header = () => {
  return (
    <div className='header'>
<img src ={logo} className='logo' alt='hero'   />

<ul className='header-menu'>
    <li>Home</li>
    <li>Programs</li>
    <li>Why us</li>
    <li>Planes</li>
    <li>Testimonials</li>
</ul>

    </div>
  )
}

export default Header