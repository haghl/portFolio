/** @type {import('tailwindcss').Config} */

const layout = {
  header: '50px',
  main: 'calc(100vh - 100px)',
  footer: '50px',
}

const theme = {
  content: [
    './layout/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '465px',
      md: '768px',
      lg: '1060px',
    },
    colors: {
      yellow: '#F2BC07',
      purple: '#BA07F2',
      black: '#191f28',
      primary: '#3182f6',
      secondary: '#26B0FA',
      error: '#DB3D12',
      SUCCESS: '#44E807',
      WARNING: '#FFAB49',
      BLG0: 'white',
      BLG300: '#d1d6db',
      BLG400: '#b0b8c1',
      BLG500: '#6B7684',
      BLG600: '#4E5968',
      BLG700: '#8b95a1',
      BLG800: '#333D4B',
    },
    width: {
      full: '100%',
    },
    height: {
      header: layout.header,
      footer: layout.footer,
      main: layout.main,
      full: '100%',
    },
    minHeight: {
      main: layout.main,
    },
    fontSize: {
      head_lg: '30px',
      head_md: '26px',
      head_sm: '22px',
      body: '18px',
      xlg: '20px',
      lg: '18px',
      md: '16px',
      sm: '14px',
    },
    padding: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      xlg: '16px',
      header: layout.header,
    },
    boxShadow: {
      header: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      headerDark: 'rgba(195, 191, 188, 0.3) 0px 1px 2px 0px, rgba(195, 191, 188, 0.15) 0px 2px 6px 2px',
    },
  },
  plugins: [],
}

module.exports = theme
