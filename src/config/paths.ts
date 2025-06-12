import path from 'path';

// Shared path aliases configuration
export const pathAliases = {
  '@modules': path.resolve(__dirname, '../modules'),
  '@assets': path.resolve(__dirname, '../assets'),
  '@shared': path.resolve(__dirname, '../shared'),
  '@api-types': path.resolve(__dirname, '../api-types'),
  '@services': path.resolve(__dirname, '../shared/services'),
  '@src': path.resolve(__dirname, '..'),
};

// TypeScript path mapping (for tsconfig.json)
export const typescriptPaths = {
  '@modules': ['src/modules/index'],
  '@modules/*': ['src/modules/*'],
  '@assets': ['src/assets/*'],
  '@shared': ['src/shared/*'],
  '@api-types': ['src/api-types/*'],
  '@services': ['src/shared/services/*'],
  '@src': ['src/'],
};
