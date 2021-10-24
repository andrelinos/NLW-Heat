import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config();


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/web/",
  define: {
    'process.env.VITE_GITHUB_CLIENT_ID': `"${process.env.VITE_GITHUB_CLIENT_ID}"`
    }
});
