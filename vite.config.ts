// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/website/',       // adiciona isto 👈
  plugins: [tailwindcss()],
})
