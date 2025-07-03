export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  if (error && typeof error === 'object' && 'message' in error) {
    return String((error as { message: unknown }).message);
  }

  return 'An unexpected error occurred';
}

export function isNetworkError(error: unknown): boolean {
  if (error instanceof Error) {
    return (
      error.message.toLowerCase().includes('network') ||
      error.message.toLowerCase().includes('fetch') ||
      error.message.toLowerCase().includes('timeout')
    );
  }
  return false;
}

/**
 * Get user-friendly error title based on error type
 */
export function getErrorTitle(error: unknown): string {
  if (isNetworkError(error)) {
    return 'Connection Error';
  }

  if (error instanceof Error && error.name === 'ValidationError') {
    return 'Invalid Data';
  }

  return 'Something went wrong';
}
