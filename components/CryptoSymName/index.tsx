import { stubString } from 'cypress/types/lodash'
import Image from 'next/image'
import React, { useEffect } from 'react'

interface CryptoSymNameProps {
    imageUrl: string,
    name: string,
    sym: string
}

const CryptoSymName = ({ imageUrl, name, sym }: CryptoSymNameProps) => {

    const capName = `${name[0].toUpperCase()}${name.slice(1)}`

    return (
        <div className='w-1/3 flex items-center space-x-3'>
            <div className='relative w-8 h-8'>
                <Image
                    src={imageUrl}
                    layout='fill'
                    // width={100}
                    // height={100}
                    alt={`${name} logo`}
                />
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-white'>{capName}</p>
                <p className='text-gray-400 text-xs'>{sym}</p>
            </div>
        </div>
    )
}

export default CryptoSymName