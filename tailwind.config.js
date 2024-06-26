
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background": "#FBFEF9",
      "primary": "#82D642",
      "secondary": "#63BCDC",
      "accent": "#8BE5D6",
      "textcolor": "#122007",
    },
    extend: {
      keyframes: {
        popin: {
        }
      },
      animation: {
        'loadin': 'popin .2s ease-in-out'
      }
    },
  },
  plugins: [],
};

const secondColors = {
  "background": "#f3f5f7",
  "primary": "#5774aa",
  "secondary": "#98b0db",
  "accent": "#608cdb",
  "textcolor": "#0a0a0b",
}
