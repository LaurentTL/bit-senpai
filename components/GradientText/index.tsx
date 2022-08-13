import React from 'react';

interface GradientTextProps {
    words: string;
}

const GradientText = ({ words }: GradientTextProps) => {
    return (
        <span className='text-5xl text-transparent bg-clip-text font-bold from-skin-first via-skin-second to-skin-third bg-gradient-20 md:text-8xl'>
            {words}
        </span>
    );
};

export default GradientText;
