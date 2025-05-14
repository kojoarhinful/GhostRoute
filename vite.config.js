import { defineConfig } from 'vite';
import { glob } from 'glob';
import path from 'path';


const inputFiles = Object.fromEntries(
  glob.sync('public/**/*.html').map((file) => [
    path.relative('public', file).replace(/\.html$/, ''),
    file,
  ])
);

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    // Generate sourcemaps
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'esbuild',
    rollupOptions: {
      input: inputFiles,
    },
  },
  // add plugins
  plugins: [
  ],
});