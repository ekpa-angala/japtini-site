/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xlg': '1080px',
      'xxlg': '1124px',
      'lgx': '1160px',
      'lgxx': '1200px',
      'xlgx': '1260px',
      'xl': '1280px',
      'xxl': '1300px',
      'xxlx': '1330px',
      'ls': '1440px',
      '2xl': '1536px',
    },
    fontFamily: {
      intregular:["inter-regular"],
      intsemi:["inter-semi"],
      konregular:["konnect-regular"],
      raleway:["raleway-regular"],
    },
    extend: {},
  },
  plugins: [],
}
