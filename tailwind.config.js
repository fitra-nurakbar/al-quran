/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out infinite",
        aurora: "aurora 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: {
            backgroundImage: "none",
          },
          to: {
            backgroundImage: "linear-gradient(to top right, primary, secondary)"
          },
        },
        aurora: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      colors: {
        primary: {
          light: "#67e8f9",
          DEFAULT: "#94bbe9",
          dark: "#0e7490",
        },
        secondary: {
          light: "#67e8f9",
          DEFAULT: "#eeaeca",
          dark: "#0e7490",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
