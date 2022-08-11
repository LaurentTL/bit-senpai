import React from 'react'
import GradientText from '../GradientText'

const Banner = () => {
    return (
        <div className='px-3 h-[calc(100vh-72px)] mx-auto flex flex-col justify-center items-center gap-10 md:w-3/5 md:min-h-[calc(100vh-(260px)]'>
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