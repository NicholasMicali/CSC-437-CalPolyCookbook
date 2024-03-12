import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'app'), // Set the root to the 'app' directory
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Specifies the output directory for build files
  },
  // Include any other configurations as needed
});