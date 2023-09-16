import React from 'react'
import {  BrowserRouter,Routes as ReactRouts,Route} from "react-router-dom"
import { LoginReg } from './Components/LoginReg/LoginReg'

import {User} from './Components/User/User'
import SignUP from './Components/SignUp/SignUP'
import PrivateRoutes from './auth/PrivateRoutes'
import AdminRoutes from './auth/AdminRoutes'
import { Payment } from './Components/Payment/Payment'
import { Space } from './Components/Space/Space'

function Routes() {
  return (
    <BrowserRouter>
    <ReactRouts>
        <Route path='/' element={<SignUP/>}/>
        {/* <Route path='/space' element={<MapComponent/>}/> */}
        <Route path='/login' element={<LoginReg/>}/>
        {/* <Route element={<PrivateRoutes/>}> */}
          <Route path='/rent' element={<User/>}/>
          <Route path='/Payment' element={<Payment/>}/>
        {/* </Route> */}
        {/* <Route element={<AdminRoutes/>}> */}
        <Route path='/space' element={<Space/>}/>
        {/* </Route> */}
    </ReactRouts>
    </BrowserRouter>
  )
}

export default Routes