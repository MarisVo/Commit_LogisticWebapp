module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true
  ,
  theme: {
    extend: {
      screens: {
        'custom-screen': '1415px',
      },
      zIndex: {
        100: "100",
      },
      colors: {
        'primary': '#F0B90B',
        'border_color': '#fcd535',
        'button_color': '#e5a663'
      },
      backgroundImage:{
        'history':"url('/src/assets/images/map-world-in-mobile.png')"
      }
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
    },
    require('@tailwindcss/line-clamp'),
  ],
}

