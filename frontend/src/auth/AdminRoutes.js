import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { isAuthenticated } from './index'

const AdminRoutes = () => {
  const isAuth = isAuthenticated();
  let role;
  try{
   role = isAuthenticated().user.role;
  }catch(err){
    role=-1
  }

  // if(isAuthenticated().user.role){
  //   role=3
  // }

  return (
    isAuth && role===1 ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default AdminRoutes