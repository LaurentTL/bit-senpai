import React from 'react'
import Link from 'next/link'

const Login = () => {
    return (
        <div className="w-24 p-0.5 flex justify-center items-center from-blue-500 via-purple-600 to-pink-600 bg-gradient-20 rounded-full">
            <Link href="#">
                <a
                    className='w-24 text-center m-auto bg-black rounded-full px-5 py-1.5 text-white'
                >
                    Log in
                </a>
            </Link>
        </div>
    )
}

export default Login