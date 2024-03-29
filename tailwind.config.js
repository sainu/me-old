module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'left-to-right': 'left-to-right 1s',
        'nav-link-fade-in': 'nav-link-fade-in 0.2s',
        'nav-link-fade-out': 'nav-link-fade-out 0.5s',
      },
      keyframes: {
        'left-to-right': {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        'nav-link-fade-in': {
          from: {
            transform: 'translateX(100%) rotate(90deg)',
            opacity: '0',
            display: 'none',
          },
          to: {
            transform: 'translateX(0) rotate(0)',
            opacity: '1',
            display: 'block',
          },
        },
        'nav-link-fade-out': {
          from: {
            transform: 'translateX(0) rotate(0)',
            opacity: '1',
            display: 'block',
          },
          to: {
            transform: 'translateX(100%) rotate(90deg)',
            opacity: '0',
            display: 'none',
          },
        },
      },
      maxWidth: {
        'main-content': '760px',
      },
    },
  },
  plugins: [],
};
