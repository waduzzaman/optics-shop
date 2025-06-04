// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-600': '#2563eb', // Your primary blue
        'blue-700': '#1d4ed8', // Darker blue for hover/accents
        'blue-800': '#1e40af', // Even darker for gradients
        'gray-800': '#1f2937', // Dark text
        'gray-700': '#374151', // Medium text
        'gray-600': '#4b5563', // Lighter text
      },
    },
  },
  plugins: [],
};