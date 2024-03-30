import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#3252DF',
        secondary: '#152C5B',
        pinky: '#FF498B'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      spacing: {
        18: '4.5rem'
      }
    }
  },
  plugins: []
};
export default config;
