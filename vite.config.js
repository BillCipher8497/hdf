import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Route-level code splitting is handled via React.lazy in App.jsx
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
