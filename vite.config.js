import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 o simplemente no pongas la línea "base" si es root
  server: {
    hmr: true,
    historyApiFallback: true,
  },
});