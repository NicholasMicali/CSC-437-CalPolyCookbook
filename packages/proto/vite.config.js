import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'app'), 
  build: {
    outDir: path.resolve(__dirname, 'dist'), 
  },
  // Include any other configurations as needed
});