import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../home'
import Login from '../auth/login'
import Registration from '../auth/registration'

import './style.scss'

const Layout = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </main>
  )
}

export default Layout