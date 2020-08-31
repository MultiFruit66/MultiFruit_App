import React, { MouseEvent } from 'react'

import './style.scss'

const handlerSubmit = (event: MouseEvent) => {
  event.preventDefault()
}

const Registration = () => {
  return (
    <div className="registration">
      <form>
        <div>
          <label htmlFor="login">Login:</label>
          <input type="text" name="login"/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email"/>
        </div>
        <div>
          <label htmlFor="password1">Password:</label>
          <input type="password" name="password1"/>
        </div>
        <div>
          <label htmlFor="password2">Repeat Password:</label>
          <input type="password" name="password2"/>
        </div>
        <button onClick={handlerSubmit}>Registration</button>
      </form>
    </div>
  )
}

export default Registration