import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '@/pages/Layout'
import history from '@/utils/history'
import Login from './pages/Login'
import AuthRouter from './components/AuthRouter'
// import { getToken } from './utils/storage'
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <AuthRouter path="/home">
          <Layout></Layout>
        </AuthRouter>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  )
}

export default App
