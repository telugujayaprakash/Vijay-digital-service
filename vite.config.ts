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
        manualChunks: (id) => {
          // Vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('react-router') || id.includes('react-router-dom')) {
              return 'router-vendor'
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor'
            }
            if (id.includes('embla-carousel') || id.includes('framer-motion')) {
              return 'carousel-vendor'
            }
            if (id.includes('tailwindcss') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
              return 'ui-vendor'
            }
            return 'vendor'
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Enable compression
    minify: 'esbuild',
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    // Enable source maps for production debugging
    sourcemap: false,
    // Optimize CSS
    cssMinify: true,
    // Enable tree shaking
    modulePreload: {
      polyfill: false,
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    // Target modern browsers for better optimization
    target: 'es2020',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: ['@vite/client', '@vite/env'],
  },
});
