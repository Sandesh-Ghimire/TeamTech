import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
import { isAuthenticated } from './index'

const PrivateRoutes = () => {
  const isAuth = isAuthenticated()
  return (
    isAuth ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes