import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
            <h1>Navbar</h1>
            <ul>
                <li><Link to="/">Quotes</Link></li>
                <li><Link to="/quotes/add">Create-Quote</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar