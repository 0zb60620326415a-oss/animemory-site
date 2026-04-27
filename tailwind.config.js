/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          50:  '#FDF5F5',
          100: '#FAE8E8',
          200: '#F0CECE',
          300: '#E5B0B0',
          400: '#D4A5A5',
          500: '#C49090',
          600: '#B07B7B',
          700: '#8E5F5F',
          800: '#6C4545',
          900: '#4A2E2E',
        },
        cream: {
          50:  '#FAFAF8',
          100: '#F5F3EF',
          200: '#EDE9E2',
          300: '#E0DAD0',
        },
      },
      fontFamily: {
        serif:   ['var(--font-noto-serif)', 'serif'],
        sans:    ['var(--font-noto-sans)',  'sans-serif'],
        display: ['var(--font-cormorant)', 'serif'],
        heading: ['var(--font-shippori)',  'serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        'ultra': '0.35em',
      },
      boxShadow: {
        // 高級感のある控えめな影
        'card':       '0 1px 8px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.05)',
        // ブランドカラーの柔らかい発光
        'sakura':     '0 4px 24px rgba(196,144,144,0.30)',
        'sakura-lg':  '0 6px 32px rgba(196,144,144,0.40)',
      },
      maxWidth: {
        'content': '768px',
        'wide':    '960px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
