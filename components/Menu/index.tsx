import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { FC, useState } from 'react';
import HoverLink from '../HoverLink';
import Login from '../LogIn/Login';
import Logo from '../Logo';
import SignUp from '../Signup/Signup';

const Menu: FC = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        open == true ? setOpen(false) : setOpen(true);
    };

    return (
        <nav className='w-full'>
            <div className='relative'>
                <div className='px-3 py-4 flex justify-between items-center lg:w-full'>
                    <div className='hidden md:block'>
                        <Logo />
                    </div>
                    <div className='hidden lg:flex ml-10'>
                        <HoverLink
                            route='/tracker'
                            title='Go to Tracker'
                            hoverColor='blue'
                        />
                    </div>
                    <div className='ml-auto flex items-center h-full gap-6'>
                        <div className='hidden md:block'>
                            <Login />
                        </div>
                        <div className='hidden md:block'>
                            <SignUp />
                        </div>
                        <div
                            className='h-full w-10 cursor-pointer lg:hidden'
                            onClick={() => handleClick()}>
                            <MenuIcon className='h-full fill-current text-white m-auto' />
                        </div>
                    </div>
                </div>
                <div
                    className={`${
                        open ? 'flex' : 'hidden'
                    } z-50 absolute inset-0 px-3 py-4 flex-col w-full h-screen backdrop-blur-lg bg-gray/30 lg:hidden`}>
                    <div className='ml-auto h-10 w-10'>
                        <XIcon
                            className='h-full fill-current cursor-pointer text-white m-auto'
                            onClick={() => handleClick()}
                        />
                    </div>
                    <div className='mt-8 mb-3'>
                        <Logo />
                    </div>
                    <div className='flex items-center mt-3 mb-6 gap-6'>
                        <Login />
                        <SignUp />
                    </div>
                    <HoverLink
                        route='/tracker'
                        title='Go to Tracker'
                        hoverColor='blue'
                    />
                </div>
            </div>
        </nav>
    );
};

export default Menu;
