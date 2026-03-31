import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('@radix-ui')) return 'radix-ui';
          if (id.includes('@supabase')) return 'supabase';
          if (id.includes('lucide-react')) return 'icons';
          if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor';
          if (id.includes('react-router')) return 'router';
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
