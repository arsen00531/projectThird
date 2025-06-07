/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        360: "360px",
        480: "480px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
      },
      container: {
        center: true,
        padding: 20,
        screens: {
          360: "100%",
          480: "100%",
          sm: "100%",
          md: "100%",
          lg: "1140px",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, addComponents }) {
      addUtilities({
        ".centered": {
          left: "50%",
          top: "50%",
          transform: 'translate(-50%, -50%)',
          position : "absolute"
        },
        ".shadow" : {
          boxShadow : "0px 0px 29px 0px rgba(34, 60, 80, 0.2)"
        } 
      });
      
    },
  ],
};
