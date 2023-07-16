import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-cont'>
        <div className='nav-img-cont'>
            <Link to ="/landing"><img src='https://www.nicepng.com/png/detail/39-396208_globe-clipart-country-globe-flags-of-the-world.png' alt='Logo Countries' /></Link>
        </div>
        <div className='nav-link-cont'>
            <Link to ="/home">Home</Link>
            <Link to ="/form">Form</Link>
        </div>
    </div>
  )
}

export default Navbar