module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
