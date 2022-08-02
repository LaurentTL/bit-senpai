import React from 'react'
import GradientText from '../GradientText'

const Banner = () => {
    return (
        <div className='w-3/5 h-[500px] m-auto flex flex-col justify-center items-center gap-10 md:w-100'>
            <h1 className='m-w-1/5 text-white text-3xl text-center md:text-5xl'>
                <GradientText words='BitSenpai' />
                {' '}is a <br />cryptocurrency tracker.
            </h1>
            <p className='text-gray-600 text-center text-lg md:text-2xl'>
                BitSenpai will bring to crypto investors a automated dollar cost average investment plan with trading bots.
            </p>
        </div >
    )
}

export default Banner