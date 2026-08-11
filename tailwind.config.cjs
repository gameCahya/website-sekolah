/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // ABBS Primary - Hijau Toska / Teal
                primary: {
                    50: '#e6f5f5',
                    100: '#cce9ea',
                    200: '#99d3d5',
                    300: '#66bdc0',
                    400: '#33a7ab',
                    500: '#00979c',
                    600: '#007a7e',
                    700: '#005c5f',
                    800: '#003e3f',
                    900: '#002020',
                    950: '#001010',
                },
                // ABBS Secondary - Biru Tua / Navy
                secondary: {
                    50: '#e8edf5',
                    100: '#d1dbeb',
                    200: '#a3b7d7',
                    300: '#7593c3',
                    400: '#476faf',
                    500: '#0f3a66',
                    600: '#0c2f52',
                    700: '#09233d',
                    800: '#061829',
                    900: '#030c14',
                },
                // ABBS Accent - Kuning / Lime Green
                accent: {
                    50: '#f9fae6',
                    100: '#f3f5cd',
                    200: '#e7eb9b',
                    300: '#dbe169',
                    400: '#d0d737',
                    500: '#dce100',
                    600: '#b1b400',
                    700: '#858700',
                    800: '#595a00',
                    900: '#2c2d00',
                },
                // Dark backgrounds
                dark: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0c2f52',
                    700: '#0a1f38',
                    800: '#071524',
                    900: '#040b14',
                },
                // Cream/off-white backgrounds
                cream: {
                    50: '#fafaf8',
                    100: '#f5f5f2',
                    200: '#efefeb',
                    300: '#e9e9e5',
                    400: '#e0e0db',
                },
            },
            fontFamily: {
                header: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                serif: ['Fraunces', 'Georgia', 'serif'],
                hand: ['Caveat', 'cursive'],
            },
        },
    },
    plugins: [],
}
