import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //for dev, as static port is eaier to check
  server: {
    port: 3000
  }
})
