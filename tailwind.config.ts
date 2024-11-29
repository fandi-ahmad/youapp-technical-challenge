import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-blue': '#09141A',
        'dark-soft-blue': '#0D1D23',
        'soft-blue': '#1F4247',
        'golden': '#D7C28E',
        'shine-blue-100': '#62CDCB',
        'shine-blue-200': '#4599DB',
        'shine-blue-disabled-100': '#62CDCB',
        'shine-blue-disabled-200': '#4599DB'
      },
      boxShadow: {
        'soft-blue': '0 12px 10px #62CDCB'
      }
    },
  },
  plugins: [],
}
export default config
