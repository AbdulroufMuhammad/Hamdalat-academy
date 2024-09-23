import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps for production
    chunkSizeWarningLimit: 600, // Adjust chunk size warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split vendor code into separate chunks
            return id.split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
