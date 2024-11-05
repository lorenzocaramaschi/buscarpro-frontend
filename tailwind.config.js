/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-blue-1': '#0367A6',
        'brand-blue-2': '#07B0F2',
        'brand-blue-3': '#05C7F2',
        'brand-gray-light': '#F2F2F2',
        'brand-gray-dark': '#0D0D0D',
      },
    },
  },
  plugins: [],
};
