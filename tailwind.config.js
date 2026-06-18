/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { darkBg: '#050816', primary: '#00E5FF', secondary: '#7C3AED', card: '#111827', whiteText: '#FFFFFF', mutedText: '#A1A1AA' },
      boxShadow: { glow: '0 0 32px rgba(0, 229, 255, 0.20)', purpleGlow: '0 0 32px rgba(124, 58, 237, 0.25)' },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] }
    }
  },
  plugins: []
};
