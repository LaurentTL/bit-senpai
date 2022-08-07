import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import React, { useEffect } from 'react'
import CryptoPrice from '../components/CryptoPrice'
import CryptoSymName from '../components/CryptoSymName'
import Search from '../components/Search'
import VolCap from '../components/VolCap'


const tracker: NextPage = ({ coinsGeko }: InferGetServerSidePropsType<typeof getServerSideProps>) => {


    return (

        <div className='px-3 mx-auto text-white w-full flex flex-col gap-2 items-center lg:w-2/3'>
            <Search />
            {
                coinsGeko.map((coin: any) => {
                    return (
                        <div key={coin.id} className='w-full flex flex-1 justify-between items-center'>
                            <CryptoSymName imageUrl={coin.image.small} name={coin.id} sym={coin.name} />
                            <CryptoPrice price={coin.market_data.current_price['eur']} change24={coin.market_data} />
                            <VolCap />
                        </div>
                    )
                })
            }
        </div>

    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    const urlGeko = 'https://api.coingecko.com/api/v3/coins'

    const res = await fetch(urlGeko)
    const data = await res.json()

    data?.error ? console.log(data.error) : null

    return {
        props: {
            coinsGeko: data
        }
    }
}

export default tracker