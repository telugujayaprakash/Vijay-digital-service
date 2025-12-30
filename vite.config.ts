import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react', 'class-variance-authority', 'clsx'],
        },
      },
    },
    // Enable compression
    minify: 'esbuild',
    // Optimize chunk size
    chunkSizeWarningLimit: 600,
    // Enable source maps for production debugging
    sourcemap: false,
  },
});
