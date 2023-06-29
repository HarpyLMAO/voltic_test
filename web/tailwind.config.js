/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          backgroundColor: "transparent",
          primary: "#f3f4f6",
          secondary: "#f5f5f4",
          accent: "#f5f5f4",
          neutral: "#e7e5e4",
          "base-100": "#00500",
          info: "#f5f5f4",
          success: "#f5f5f4",
          warning: "#f5f5f4",
          error: "#f5f5f4",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
