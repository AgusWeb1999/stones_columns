import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/stones_columns/', // <- nombre del repo entre slashes
  plugins: [react()],
})