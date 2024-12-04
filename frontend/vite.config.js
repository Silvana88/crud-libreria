import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

/*export default {
  server: {
    host: 'localhost',
    https: false,
    hmr: {
      host: 'localhost',
    },
  },
};*/




export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/, // Procesa todos los archivos .js en src como JSX
    exclude: [],
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
