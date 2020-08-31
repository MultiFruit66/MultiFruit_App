import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
import '../layout/style.scss'

const Header = () => {
  return (
    <header className="container">
      <nav>
        <Link to="/">Home</Link>
        <div className="auth">
          <Link to="/login">Login</Link>
          <span> / </span>
          <Link to="/registration">Registration</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header