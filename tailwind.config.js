module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {

        "custom-screen": "1415px",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@media (min-width: 640px)': {
            maxWidth: '640px',
          },
          '@media (min-width: 768px)': {
            maxWidth: '768px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '960px',
          },
          '@media (min-width: 1280px)': {
            maxWidth: '1140px',
          },
        }
      })
}],
  important: true,
 


  corePlugins: {
    container: false
  },

}

