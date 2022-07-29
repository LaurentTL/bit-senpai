import React, { FC } from 'react'
import Login from '../LogIn/Login'
import Logo from '../Logo/Logo'
import SignUp from '../Signup/Signup'
import { MenuIcon } from '@heroicons/react/solid'
import Menu from '../Menu/Menu'

const Header: FC = () => {
  return (
    <header className='bg-black py-7 px-3 flex justify-between items-center'>
      <Logo />
      <Menu />
    </header>
  )
}

export default Header