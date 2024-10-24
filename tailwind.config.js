// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // NOTE: Update this to include the paths to all of your component files.
//   content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ['Jakarta', 'sans-serif'],
        JakartaBold: ['Jakarta-Bold', 'sans-serif'],
        JakartaExtraBold: ['Jakarta-ExtraBold', 'sans-serif'],
        JakartaExtraLight: ['Jakarta-ExtraLight', 'sans-serif'],
        JakartaLight: ['Jakarta-Light', 'sans-serif'],
        JakartaMedium: ['Jakarta-Medium', 'sans-serif'],
        JakartaSemiBold: ['Jakarta-SemiBold', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#F5F8FF',
          200: '#EBF4FF',
          300: '#C3D9FF',
          400: '#9BBFFF',
          500: '#0286FF',
          600: '#6A85E6',
          700: '#475A99',
          800: '#364573',
          900: '#242B4D',
        },
        secondary: {
          100: '#F8F8F8',
          200: '#F1F1F1',
          300: '#D9D9D9',
          400: '#C2C2C2',
          500: '#AAAAAA',
          600: '#999999',
          700: '#666666',
          800: '#4D4D4D',
          900: '#333333',
        },
        success: {
          100: '#F0FFF4',
          200: '#C6F6D5',
          300: '#9AE6B4',
          400: '#68D391',
          500: '#38A169',
          600: '#2F855A',
          700: '#276749',
          800: '#22543D',
          900: '#1C4532',
        },
        danger: {
          100: '#FFF5F5',
          200: '#FED7D7',
          300: '#FEB2B2',
          400: '#FC8181',
          500: '#F56565',
          600: '#E53E3E',
          700: '#C53030',
          800: '#9B2C2C',
          900: '#742A2A',
        },
        warning: {
          100: '#FFFBEB',
          200: '#FEF3C7',
          300: '#FDE68A',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
        },
        general: {
          100: '#CED1DD',
          200: '#858585',
          300: '#EEEEEE',
          400: '#0CC25F',
          500: '#F6F8FA',
          600: '#E6F3FF',
          700: '#EBEBEB',
          800: '#ADADAD',
        },
      },
    },
  },
  plugins: [],
}
