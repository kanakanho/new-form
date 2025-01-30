/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: false,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      exclude: ['src/main.tsx', 'node_modules', 'dist', 'build', 'coverage'],
    },
  },
})
