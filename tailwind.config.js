/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Optional: add more like "cupcake", "forest", etc.
    darkTheme: "dark",         // Default dark theme
    base: true,                // Enable base styles
    styled: true,              // Enable DaisyUI component styles
    utils: true,               // Enable utility classes
    logs: false,               // Disable DaisyUI logs in console
    rtl: false,                // Set to true for RTL support
    prefix: "",                // Add a prefix to all DaisyUI classes if needed
  },
};
