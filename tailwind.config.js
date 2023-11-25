/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "greyscale-900": "var(--color-greyscale-900)",
        "greyscale-500": "var(--color-greyscale-500)",
        "primary-base": "var(--color-primary-base)",
        "primary-green-300": "var(--color-primary-green-300)",
        "alerts-success-base": "var(--color-alerts-success-base)",
        "alerts-error-base": "var(--color-alerts-error-base)",
        "greyscale-50": "var(--color-greyscale-50)",
        "greyscale-100": "var(--color-greyscale-100)",
        "greyscale-200": "var(--color-greyscale-200)",
        "greyscale-300": "var(--color-greyscale-300)",
        "greyscale-600": "var(--color-greyscale-600)",
        "other-blue": "var(--color-other-blue)",
      },
      fontFamily: {
        manropeRegular: ["Manrope Regular"],
        manropeMedium: ["Manrope Medium"],
        manropeBold: ["Manrope Bold"],
      }
    },

  },
  plugins: [],
}

