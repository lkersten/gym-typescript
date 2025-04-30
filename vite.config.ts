import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/scenes": path.resolve(__dirname, "./src/scenes"),
      "@/shared": path.resolve(__dirname, "./src/shared"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  server: {
    fs: {
      strict: false, // Allow serving files outside Vite’s module graph
    },
  },
    assetsInclude: ["**/*.png"], // Treat PNGs as assets
});
