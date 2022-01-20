import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from './pages/Login'
function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavLink to="/login">登录页面</NavLink> &nbsp; &nbsp;
        <NavLink exact to="/">
          首页
        </NavLink> */}
        <Switch>
          <Redirect exact from="/" to="/login"></Redirect>
          <Route exact path="/" component={Layout}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
