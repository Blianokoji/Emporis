import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Target modern evergreen browsers
    target: 'es2022',
    // Output directory clean build
    emptyOutDir: true,
    // Enable source map if needed, or keep false for minimal bundle
    sourcemap: false,
    // Chunk size warning threshold
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Deterministic chunk naming for long-term immutable browser caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        // Manual chunk splitting for caching vendor libraries separately
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'vendor-react'
          if (id.includes('lenis')) return 'vendor-lenis'
          if (id.includes('@radix-ui')) return 'vendor-radix'
          return undefined
        },
      },
    },
  },
  server: {
    // Cache control headers for local dev server
    headers: {
      'Cache-Control': 'no-cache',
    },
  },
})
