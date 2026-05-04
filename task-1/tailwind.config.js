/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandInk: '#0f172a',
        brandMuted: '#64748b',
        brandPrimary: '#0ea5e9',
        brandGoldDark: '#ca8a04',
        brandGoldLight: '#fef9c3',
        brandGold: '#fde047',
        brandBronze: '#92400e',
        brandAmber: '#eab308',
        brandSlate: '#94a3b8',
      },
    },
  },
  plugins: [],
}

