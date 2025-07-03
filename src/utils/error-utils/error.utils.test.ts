import { getErrorMessage, isNetworkError, getErrorTitle } from './error.utils';

describe('error utils', () => {
  describe('getErrorMessage', () => {
    it('should return message from Error instance', () => {
      const error = new Error('Test error message');
      expect(getErrorMessage(error)).toBe('Test error message');
    });

    it('should return string error as is', () => {
      const error = 'String error message';
      expect(getErrorMessage(error)).toBe('String error message');
    });

    it('should return message property from object with message', () => {
      const error = { message: 'Object error message' };
      expect(getErrorMessage(error)).toBe('Object error message');
    });

    it('should convert non-string message to string', () => {
      const error = { message: 123 };
      expect(getErrorMessage(error)).toBe('123');
    });

    it('should return default message for undefined', () => {
      expect(getErrorMessage(undefined)).toBe('An unexpected error occurred');
    });

    it('should return default message for null', () => {
      expect(getErrorMessage(null)).toBe('An unexpected error occurred');
    });

    it('should return default message for number', () => {
      expect(getErrorMessage(42)).toBe('An unexpected error occurred');
    });

    it('should return default message for object without message', () => {
      const error = { code: 500 };
      expect(getErrorMessage(error)).toBe('An unexpected error occurred');
    });
  });

  describe('isNetworkError', () => {
    it('should return true for network error message', () => {
      const error = new Error('Network request failed');
      expect(isNetworkError(error)).toBe(true);
    });

    it('should return true for fetch error message', () => {
      const error = new Error('Fetch failed to load resource');
      expect(isNetworkError(error)).toBe(true);
    });

    it('should return true for timeout error message', () => {
      const error = new Error('Request timeout occurred');
      expect(isNetworkError(error)).toBe(true);
    });

    it('should return true for case insensitive network error', () => {
      const error = new Error('NETWORK connection lost');
      expect(isNetworkError(error)).toBe(true);
    });

    it('should return false for non-network error', () => {
      const error = new Error('Validation failed');
      expect(isNetworkError(error)).toBe(false);
    });

    it('should return false for non-Error objects', () => {
      expect(isNetworkError('network error')).toBe(false);
      expect(isNetworkError({ message: 'network error' })).toBe(false);
      expect(isNetworkError(null)).toBe(false);
    });
  });

  describe('getErrorTitle', () => {
    it('should return "Connection Error" for network errors', () => {
      const error = new Error('Network request failed');
      expect(getErrorTitle(error)).toBe('Connection Error');
    });

    it('should return "Invalid Data" for ValidationError', () => {
      const error = new Error('Validation failed');
      error.name = 'ValidationError';
      expect(getErrorTitle(error)).toBe('Invalid Data');
    });

    it('should return default title for other errors', () => {
      const error = new Error('Some other error');
      expect(getErrorTitle(error)).toBe('Something went wrong');
    });

    it('should return default title for non-Error objects', () => {
      expect(getErrorTitle('string error')).toBe('Something went wrong');
      expect(getErrorTitle({ message: 'object error' })).toBe(
        'Something went wrong',
      );
    });
  });
});
