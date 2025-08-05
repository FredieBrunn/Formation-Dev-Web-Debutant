const { build } = require('vite')
const { resolve } = require('path')

async function buildSlides() {
  try {
    await build({
      root: process.cwd(),
      base: '/',
      build: {
        outDir: 'dist',
        rollupOptions: {
          input: resolve(__dirname, 'slides.md')
        }
      }
    })
    console.log('Build successful!')
  } catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  }
}

buildSlides()