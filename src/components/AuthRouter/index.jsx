import { getToken } from '@/utils/storage'
import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'

export default function AuthRouter({
  component: Component,
  children,
  ...test
}) {
  const location = useLocation()
  return (
    <Route
      {...test}
      render={() => {
        const token = getToken()
        if (token) {
          return children ? children : <Component></Component>
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: location.pathname,
                },
              }}
            ></Redirect>
          )
        }
      }}
    ></Route>
  )
}
