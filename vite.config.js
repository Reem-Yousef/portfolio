import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/portfolio/", // 👈 مهم جدًا
  plugins: [react()],
})