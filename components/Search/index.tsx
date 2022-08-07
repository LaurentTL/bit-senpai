import React from 'react'

const Search = () => {
    return (
        <div className="w-full relative my-6 group">
            <div className="w-full absolute -inset-0.5 from-skin-first via-skin-second to-skin-third bg-gradient-20 rounded-lg blur opacity-75 group-hover:opacity-100"></div>
            <input className="w-full relative px-7 py-4 bg-black rounded-lg leading-none flex items-center outline-none" placeholder='Search for a coin...' />
        </div>
    )
}

export default Search