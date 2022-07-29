import React, { FC } from 'react'
import Login from '../LogIn/Login'
import Logo from '../Logo/Logo'
import SignUp from '../Signup/Signup'

const Header: FC = () => {
  return (
    <header className='bg-black py-7 px-3 flex justify-between items-center'>
      <Logo />
      <div className='flex gap-6'>
        <Login />
        <SignUp />
      </div>
    </header>
  )
}

export default Header