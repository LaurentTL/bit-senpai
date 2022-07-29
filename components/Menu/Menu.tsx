import { MenuIcon } from '@heroicons/react/solid'
import React from 'react'
import HoverLink from '../HoverLink/HoverLink'
import Login from '../LogIn/Login'
import SignUp from '../Signup/Signup'

const Menu = () => {
    return (
        <nav className='flex justify-between items-center md:ml-10 lg:w-full'>
            <div className='hidden lg:block'>
                <HoverLink title='Go to Tracker' hoverColor='blue' />
            </div>
            <div className='flex items-center h-full gap-6'>
                <Login />
                <SignUp />
                <div className='h-full w-10 lg:hidden'>
                    <MenuIcon className='h-full fill-current text-white m-auto' />
                </div>
            </div>
        </nav>
    )
}

export default Menu