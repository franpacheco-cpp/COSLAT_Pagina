import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        fg: '#000000'
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'monospace'
        ]
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)', textShadow: '0 0 #fff, 0 0 #000' },
          '20%': { transform: 'translate(-1px, 0.5px)', textShadow: '1px 0 #fff, -1px 0 #000' },
          '40%': { transform: 'translate(1px, -0.5px)', textShadow: '-1px 0 #fff, 1px 0 #000' },
          '60%': { transform: 'translate(-0.5px, -1px)', textShadow: '1px 0 #fff, -1px 0 #000' },
          '80%': { transform: 'translate(0.5px, 1px)', textShadow: '-1px 0 #fff, 1px 0 #000' },
          '100%': { transform: 'translate(0)', textShadow: '0 0 #fff, 0 0 #000' }
        }
      },
      animation: {
        glitch: 'glitch 1s steps(2, end) infinite'
      }
    }
  },
  plugins: []
};

export default config;
