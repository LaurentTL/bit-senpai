import React, { useEffect, useState, useLayoutEffect } from 'react'

const CryptoPrice = () => {

    const [price, setPrice] = useState(Number)

    useLayoutEffect(() => {
        let ws = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade')
        ws.onmessage = (event) => {
            let stockObject = JSON.parse(event.data);
            let stockPrice = parseFloat(stockObject.p)

            console.log(typeof stockPrice)
            setPrice(stockPrice)
        }
    }, [])


    return (
        <div>
            <p className='text-white'>{price}</p>
        </div>
    )
}

export default CryptoPrice