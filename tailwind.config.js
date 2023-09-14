/** @type {import('tailwindcss').Config} */
// include default fonts
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_main: '#F2F2F2',
        bg_landing: '#EAEAE9',
        active_menu: '#F7F7FB',
        light_gray: '#EAEAE9', // also bg_landing
        maroon: '#BB271A',
        light_maroon: '#F6E5E8',
        gray: '#C4C4C4',
        blue_gray: '#4F5B67',
        rDarkMaroon: '#410003', // really dark maroon
        darkMaroon: '#AD312F',
        primary_red: '#AD312F',
        button_outline: "#857371",
        whitish: '#FCFCFC',

        Blue: 'hsl(223, 87%, 63%)',
        PaleBlue: 'hsl(223, 100%, 88%)',
        LightRed: 'hsl(354, 100%, 66%)',
        Gray: 'hsl(0, 0%, 59%)',
        VeryDarkBlue: 'hsl(209, 33%, 12%)'
      },
      fontFamily: {
        // 'Family': ['Libre Franklin', ...defaultTheme.fontFamily.sans]
        'Family': ["Libre Franklin", "sans-serif", "Open Sans", "Raleway", "Rubik"]
      }
    },
  },
  plugins: [],
}