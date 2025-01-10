import React from 'react'
import './AccountMenu.css'
import { Link } from 'react-router-dom'
const AccountMenu = () => {
  return (
    <nav className='nav-menu account-menu'>
      <ul>
        <li className='login-button'><Link to='/user/login'>Login</Link></li>
        <li className='signup-button'>Sign Up - its free</li>
        <li className="logout-button hide">Logout</li>
      </ul>
    </nav>
  )
}

export default AccountMenu
