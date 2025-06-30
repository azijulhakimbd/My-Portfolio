/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite', 
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], 
    darkTheme: "dark",         
    base: true,                
    styled: true,              
    utils: true,               
    logs: false,               
    rtl: false,               
    prefix: "",                
  },
};
