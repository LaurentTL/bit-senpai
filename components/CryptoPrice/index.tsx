import React, { FC, useEffect, useState } from 'react'

interface CryptoPriceProps {
    price: string
    change24: string
}


const CryptoPrice: FC<CryptoPriceProps> = ({ price, change24 }) => {

    useEffect(() => {

    })


    return (

        <div className='w-1/3 flex flex-col self-center md:flex-row justify-around'>
            <p className='text-white self-center'>{price}</p>
            <p className='text-white self-center'>{change24}</p>
        </div>
    )
}


export default CryptoPrice