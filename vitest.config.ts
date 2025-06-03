/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      exclude: [
        'node_modules/',
        'src/**/*.test.{js,ts,tsx}',
        'src/**/*.spec.{js,ts,tsx}',
        '**/*.d.ts',
        '**/*.config.*',
        'dist/',
        'src/main.tsx', // Exclude main.tsx from coverage as it's just setup
      ],
      include: ['src/**/*.{js,ts,tsx}'],
      // Coverage thresholds - tests will fail if below these percentages
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70,
        },
      },
      // Fail tests if coverage is below thresholds
      reportOnFailure: true,
      // Enable watermarks to see threshold status
      watermarks: {
        statements: [70, 90],
        functions: [70, 90],
        branches: [70, 90],
        lines: [70, 90],
      },
      all: true,
      skipFull: false,
    },
  },
});
