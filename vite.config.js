import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/stone_columns/', // <- nombre del repo entre slashes
  plugins: [react()],
})