import Link from 'next/link'
import React from 'react'

const SignUp = () => {
    return (
        <Link href='#'>
            <a
                className='h-100 rounded-full px-5 py-1.5 from-blue-500 via-purple-600 to-pink-600 bg-gradient-20 text-white'
            >
                Sign up
            </a>
        </Link>
    )
}

export default SignUp