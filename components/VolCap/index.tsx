import React, { FC } from 'react';

interface VolCapProps {
    vol: string;
    cap: string;
}

const VolCap: FC<VolCapProps> = ({ vol, cap }) => {
    return (
        <div className='text-white w-1/3 flex items-end flex-col md:flex-row'>
            <p className='text-white md:w-1/2 md:text-end'>{vol}</p>
            <p className='text-white md:w-1/2 md:text-end'>{cap}</p>
        </div>
    );
};

export default VolCap;
