/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { pathAliases } from './src/paths';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: pathAliases,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html', 'json'],
      exclude: [
        'node_modules/',
        'src/**/*.test.{js,ts,tsx}',
        'src/**/*.spec.{js,ts,tsx}',
        '**/*.d.ts',
        '**/*constants.ts',
        '**/*index.ts',
        'src/api-types/**',
        'src/config/*',
        'src/translation/**',
        '**/*.config.*',
        'dist/',
        'src/main.tsx', // Exclude main.tsx from coverage as it's just setup
      ],
      include: ['src/**/*.{js,ts,tsx}'],
      // Coverage thresholds - tests will fail if below these percentages
      thresholds: {
        lines: 30,
      },
      reportOnFailure: true,
    },
  },
});
