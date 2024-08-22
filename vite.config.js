/* eslint-disable no-unused-vars */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ReactModal from "react-modal"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-modal']
    }
  }
})
