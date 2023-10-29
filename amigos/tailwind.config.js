/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main-color": '#F47820'
      },
      screens: {
        "2xl":  { max: "1600px" },
        "xl":  { max: "1250px" },
        "xl-min": { max: "1150px"},
        "xxl": {max: "1080"},
        "md": { max:"1100px" }
      }
    },
  },
  plugins: [],
}
