// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust based on your project structure
  ],
  theme: {
    container : {
        center : true,
        padding: {
          DEFAULT: "1rem",
        }     
    },   
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
     
    extend: {
     fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        monoton: ['Monoton', 'cursive'],
      },
      backgroundImage : {
        bannerImage : "url('/hero.png')",
        bannerImageFeature : "url('/page02Banner.png')",
        bannerImageToken : "url(/tokenBanner.png)"
      }
    },
  },
  plugins: [],
};
