module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        sm: '200px',
        md: '640px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        customBg: '	#A7C7E7', // Custom background color
        customText: '#000000', // Custom text color
        primary:'#E6FFE6',
        secondary:'#4D4D4D',
        themeBlack: '#1a202c',
        blue:'#658ba7',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font family
        oswald: ['Oswald', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 1s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'custom-light': '2px 2px 5px #ffff',
      },
    },
  },
  plugins: [],
};
