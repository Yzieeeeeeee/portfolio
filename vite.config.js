import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  server: {
    watch: {
      ignored: [
        '**/public/legacy/**/*.apk',
        '**/public/legacy/**/*.mp4',
        '**/public/legacy/**/*.ipa',
      ],
    },
  },
})
