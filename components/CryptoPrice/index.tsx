import React, { useEffect, useState } from 'react'
import CryptoSymName from '../CryptoSymName'


const CryptoPrice = () => {

    // const [price, setPrice] = useState(Number)

    // useEffect(() => {
    //     let ws = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade')
    //     ws.onmessage = (event) => {
    //         let stockObject = JSON.parse(event.data);
    //         let stockPrice = parseFloat(stockObject.p)

    //         // console.log(typeof stockPrice)
    //         setPrice(stockPrice)
    //     }

    //     return function cleanUp() {
    //         return ws.close()
    //     }
    // }, [])


    const [loading, setLoading] = useState(true)


    return (

        <div className='w-1/3 flex flex-col self-center md:flex-row justify-around'>
            <p className='text-white self-center'>25000</p>
            <p className='text-white self-center'>Changement</p>
        </div>
    )
}


export default CryptoPrice