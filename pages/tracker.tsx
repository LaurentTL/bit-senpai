import { NextPage } from 'next'
import React, { useEffect } from 'react'
import CryptoPrice from '../components/CryptoPrice'

const tracker: NextPage = () => {

    return (
        <div className='text-white h-[600px]'>
            <CryptoPrice />
        </div>
    )
}

export default tracker