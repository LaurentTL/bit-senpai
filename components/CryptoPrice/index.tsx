import React, { useEffect, useState } from 'react'

const CryptoPrice = () => {

    const [price, setPrice] = useState(Number)

    useEffect(() => {
        let ws = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade')
        ws.onmessage = (event) => {
            let stockObject = JSON.parse(event.data);
            let stockPrice = parseFloat(stockObject.p)

            console.log(typeof stockPrice)
            setPrice(stockPrice)
        }

        return function cleanUp() {
            return ws.close()
        }
    }, [])

    const [loading, setLoading] = useState(true)




    return (
        <div className='px-3 w-full flex justify-between items-center gap-'>
            <div className='bg-gray-400 w-8 h-8 rounded-full'>

            </div>
            <div className='flex flex-col md:flex-row'>
                <p className='text-white'>25000</p>
                <p className="text-white">Changement</p>
            </div>
            <div className='flex flex-col md:flex-row'>
                <p className="text-white">Volume</p>
                <p className="text-white">Capitalisation</p>
            </div>
        </div>
    )
}

export default CryptoPrice