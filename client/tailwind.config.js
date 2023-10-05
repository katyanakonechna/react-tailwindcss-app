/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        dark: 'media',
        colors: {
            transparent: 'transparent',
            white: '#f6f6f6',
            warning: '#d62828',
            success: '#6a994e',
            primary: {
                base: '#FFBF46',
                text: '#241623'
            },
            secondary: {
                base: '#648381',
                text: '#E8EDED'
            },
            accents: {
                text: '#575761',
                text_2: '#7D6167',
            },
            green: {
                light: '#E4FDE1',
                main: '#8ACB88',
                dark: '#637E7E'
            },
            gray: {
                light: '#5D6B6F',
                main: '#575760',
                dark: '#44444B'
            }
        },
        fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        }
    },
    plugins: [],
}

