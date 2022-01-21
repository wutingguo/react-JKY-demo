import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '@/pages/Layout'
import history from '@/utils/history'
import Login from './pages/Login'
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/login"></Redirect>
        <Route path="/home" component={Layout}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  )
}

export default App
