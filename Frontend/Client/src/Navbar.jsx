import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>  {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MySite</div>
        <ul className="nav-links">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Contact</Link>
        <Link to='/dashboard'>Dashboard</Link>


        </ul>
      </nav></div>
  )
}
