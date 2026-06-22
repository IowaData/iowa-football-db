import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change 'iowa-football-db' below to match your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/iowa-football-db/',
})
