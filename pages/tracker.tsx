import { NextPage } from 'next'
import React, { useEffect } from 'react'
import CryptoPrice from '../components/CryptoPrice'
import CryptoSymName from '../components/CryptoSymName'
import VolCap from '../components/VolCap'

const tracker: NextPage = ({ coins }: any) => {

    return (

        <div className='px-3 mx-auto text-white w-full flex flex-col gap-2 items-center lg:w-2/3'>
            {
                coins.map((coin: any) => {
                    return (
                        <div key={coin.id} className='w-full flex flex-1 justify-between items-center'>
                            <CryptoSymName imageUrl={coin.image.small} name={coin.id} sym={coin.symbol.toUpperCase()} />
                            <CryptoPrice />
                            <VolCap />
                        </div>
                    )
                })
            }
        </div>

    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins')
    const data = await res.json()

    return {
        props: {
            coins: data
        }
    }
}

export default tracker