import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive})=> isActive ? "active-link" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive})=> isActive ? "active-link" : "" }>About</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({isActive})=> isActive ? "active-link" : ""}>dashboard</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar