module.exports = {
  content: ['./public/standalone-preview.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        serif: ['Calibri', 'Carlito', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      colors: {
        paper: {
          50: '#FAF8F5',
          100: '#F3EFEA',
          200: '#E6E0D6',
          300: '#D5CBBF'
        },
        forest: {
          50: '#F0F7F4',
          100: '#DCECE3',
          600: '#2D6A4F',
          700: '#1B4332',
          800: '#132F23',
          900: '#0D2018'
        },
        ochre: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          600: '#B45309',
          700: '#9A3412',
          800: '#7C2D12'
        },
        ink: {
          900: '#18181B',
          700: '#3F3F46',
          500: '#57534E',
          400: '#78716C'
        }
      }
    }
  }
};
