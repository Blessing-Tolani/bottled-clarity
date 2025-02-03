import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#2F3C7E',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'serif'],
        lora: ['Lora', 'serif'],
      },
      screens: {
        xlMax: { max: '1279px' },
        lgMax: { max: '1023px' },
        mdMax: { max: '767px' },
        smMax: { max: '639px' },
      },
    },
  },
  plugins: [],
} satisfies Config
