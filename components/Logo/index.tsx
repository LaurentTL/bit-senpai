import Image from 'next/image'
import React from 'react'
import logoBitSenpai from '../../public/static/images/logo.svg'

const Logo = () => {
    return (
        <div className='flex gap-3 items-center h-100'>
            <div className='relative h-7 w-7'>
                <Image
                    src={logoBitSenpai}
                    layout='fill'
                    objectFit='contain'
                    alt='logo bitsenpai'
                />
            </div>
            <p className='font-bold text-xl text-white'>
                BitSenpai
            </p>
        </div>
    )
}

export default Logo