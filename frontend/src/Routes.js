import React from 'react'
import {  BrowserRouter,Routes as ReactRouts,Route} from "react-router-dom"
import { LoginReg } from './Components/LoginReg/LoginReg'
import SignUP from './Components/SignUP/SignUP'
import {User} from './Components/User/User'
import { Space } from './Components/Space/Space'
import PrivateRoutes from './auth/PrivateRoutes'
import AdminRoutes from './auth/AdminRoutes'

function Routes() {
  return (
    <BrowserRouter>
    <ReactRouts>
        <Route path='/' element={<SignUP/>}/>
        <Route path='/login' element={<LoginReg/>}/>
        <Route element={<PrivateRoutes/>}>
          <Route path='/rent' element={<User/>}/>
        </Route>
        <Route element={<AdminRoutes/>}>
        <Route path='/space' element={<Space/>}/>
        </Route>
    </ReactRouts>
    </BrowserRouter>
  )
}

export default Routes