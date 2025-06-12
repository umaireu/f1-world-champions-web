import userEvent from '@testing-library/user-event';
import { render } from '@utils/test/render';
import { ErrorFallBack } from './error-fallback';
import i18next from 'i18next';

// Mock the window.location.reload method
const mockReload = vi.fn();
Object.defineProperty(window, 'location', {
  value: {
    reload: mockReload,
  },
  writable: true,
});

describe('error fallback component', () => {
  const mockError = new Error('Test error');
  const mockResetErrorBoundary = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render error title', () => {
    const { getByText } = render({
      ui: (
        <ErrorFallBack
          error={mockError}
          resetErrorBoundary={mockResetErrorBoundary}
        />
      ),
    });

    expect(getByText(i18next.t('errorFallback.title'))).toBeInTheDocument();
  });

  it('should render error description', () => {
    const { getByText } = render({
      ui: (
        <ErrorFallBack
          error={mockError}
          resetErrorBoundary={mockResetErrorBoundary}
        />
      ),
    });

    expect(
      getByText(i18next.t('errorFallback.description')),
    ).toBeInTheDocument();
  });

  it('should render reload button', () => {
    const { getByRole } = render({
      ui: (
        <ErrorFallBack
          error={mockError}
          resetErrorBoundary={mockResetErrorBoundary}
        />
      ),
    });
    const button = getByRole('button', {
      name: i18next.t('errorFallback.reload'),
    });
    expect(button).toBeInTheDocument();
  });

  it('should call resetErrorBoundary and reload page when reload button is clicked', async () => {
    const { getByRole } = render({
      ui: (
        <ErrorFallBack
          error={mockError}
          resetErrorBoundary={mockResetErrorBoundary}
        />
      ),
    });
    const button = getByRole('button', {
      name: i18next.t('errorFallback.reload'),
    });
    await userEvent.click(button);

    expect(mockResetErrorBoundary).toHaveBeenCalledTimes(1);
    expect(mockReload).toHaveBeenCalledTimes(1);
  });
});
