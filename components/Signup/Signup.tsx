import Link from 'next/link';
import React from 'react';

const SignUp = () => {
    return (
        <div>
            <Link href='#'>
                <a className='rounded-full w-24 py-1.5 block text-center from-blue-500 via-purple-600 to-pink-600 bg-gradient-20 text-white'>
                    Sign up
                </a>
            </Link>
        </div>
    );
};

export default SignUp;
