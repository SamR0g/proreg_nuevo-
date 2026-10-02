import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';
import { fileURLToPath, URL } from 'node:url';
import { blogPosts } from './src/data/blogPosts';

const staticRoutes = [
  '/',
  '/servicios',
  '/nosotros',
  '/contacto',
  '/productos/domesticos',
  '/productos/refrigeracion-industrial',
  '/productos/paneles-solares',
  '/blog',
];

const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [...staticRoutes, ...blogRoutes],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterTime: 1500,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});