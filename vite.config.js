
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

react({ reactRefreshHost: 'http://localhost:3000' })