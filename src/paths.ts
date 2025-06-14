import path from 'path';

// Shared path aliases configuration
export const pathAliases = {
  '@api-types': path.resolve(__dirname, './api-types'),
  '@assets': path.resolve(__dirname, './assets'),
  '@components': path.resolve(__dirname, './components'),
  '@modules': path.resolve(__dirname, './modules'),
  '@routes': path.resolve(__dirname, './routes'),
  '@services': path.resolve(__dirname, './services'),
  '@translations': path.resolve(__dirname, './translations'),
  '@utils': path.resolve(__dirname, './utils'),
  '@mocks': path.resolve(__dirname, './mocks'),
};
