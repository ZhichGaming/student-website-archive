/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        entrance: "url('/background.jpg')",
      },
      animation: {
        skeleton: "skeleton-loading 1s linear infinite alternate",
      },
      keyframes: {
        "skeleton-loading": {
          "0%": {
            " background-color": "hsl(200, 20%, 70%)",
          },
          "100%": {
            "background-color": "hsl(200, 20%, 95%)",
          },
        },
      },
    },
  },
  plugins: [],
};
