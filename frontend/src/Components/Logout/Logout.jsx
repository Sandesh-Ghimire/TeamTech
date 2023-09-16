import React from 'react'
import './Logout.css'
import { signout,isAuthenticated } from '../../auth'
import { useNavigate ,Link } from 'react-router-dom'

const Logout = () => {
    let navigate = useNavigate()
  return (
    <div className='button'>
        <span className='width'></span>
        <button className='btn1'>
            <Link to={'/login'} className='style'>Login</Link>
        </button>
        {
            isAuthenticated() && (
            <button className='btn2' onClick={() => {
                signout(()=>{
                    navigate('/login')
                })
            }}>
                Logout
            </button>
            )
        }
    </div>
  )
}

export default Logout