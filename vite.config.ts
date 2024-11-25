import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


/*import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { visualizer } from 'vite-plugin-bundle-analyzer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Abre automáticamente el reporte en el navegador
      filename: 'bundle-analysis.html', // Nombre del archivo de análisis
      template: 'sunburst', // Plantilla de visualización ('treemap', 'sunburst', 'network', etc.)
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
*/