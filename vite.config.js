import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['3000-ik8q9climnwueysx8c59e-4246f6d0.us2.manus.computer', 'localhost'],
  },
});
