const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            // custom user configuration
            bgGradientDeg: {
                75: '75deg',
            },
            gradientColorStops: {
                skin: {
                    first: 'var(--gradient-first)',
                    second: 'var(--gradient-second)',
                    third: 'var(--gradient-third)',
                },
            },
            animation: {
                tilt: 'tilt 10s infinite linear',
            },
            keyframes: {
                tilt: {
                    '0%, 50%, 100%': {
                        transform: 'rotate(0deg)',
                    },
                    '25%': {
                        transform: 'rotate(0.5deg)',
                    },
                    '75%': {
                        transform: 'rotate(-0.5deg)',
                    },
                },
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'bg-gradient': (angle) => ({
                        'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
                    }),
                },
                {
                    values: Object.assign(theme('bgGradientDeg', {}), {
                        10: '10deg',
                        15: '15deg',
                        20: '20deg',
                        25: '25deg',
                        30: '30deg',
                        45: '45deg',
                        60: '60deg',
                        90: '90deg',
                        120: '120deg',
                        135: '135deg',
                    }),
                }
            );
        }),
    ],
};
