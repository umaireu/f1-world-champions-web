import { render } from '@utils/test/render';
import { fireEvent } from '@testing-library/react';
import { ErrorDisplay } from './error';
import i18next from 'i18next';

// Mock the reload function
const mockReload = vi.fn();
Object.defineProperty(window, 'location', {
  value: {
    reload: mockReload,
  },
  writable: true,
});

describe('error display component', () => {
  beforeEach(() => {
    mockReload.mockClear();
  });

  it('renders error message from Error object', () => {
    const error = 'Something went wrong';
    const { getByText } = render({
      ui: <ErrorDisplay error={error} title='error-title' />,
    });
    expect(getByText(error)).toBeInTheDocument();
  });

  it('renders error message from string', () => {
    const error = 'Simple error message';
    const { getByText } = render({ ui: <ErrorDisplay error={error} /> });

    expect(getByText('Simple error message')).toBeInTheDocument();
  });

  it('renders custom title when provided', () => {
    const error = new Error('Error message');
    const customTitle = 'Custom Error Title';

    const { getByText } = render({
      ui: <ErrorDisplay error={error} title={customTitle} />,
    });

    expect(getByText(customTitle)).toBeInTheDocument();
  });

  it('does not show refresh button by default', () => {
    const error = new Error('Test error');
    const { queryByRole } = render({ ui: <ErrorDisplay error={error} /> });
    const button = queryByRole('button', { name: i18next.t('button.refresh') });

    expect(button).not.toBeInTheDocument();
  });

  it('shows refresh button when showRefresh is true', () => {
    const error = new Error('Test error');
    const { getByRole } = render({
      ui: <ErrorDisplay error={error} showRefresh={true} />,
    });
    const button = getByRole('button', { name: i18next.t('button.refresh') });
    expect(button).toBeInTheDocument();
  });

  it('calls window.location.reload when refresh button is clicked', () => {
    const error = new Error('Test error');
    const { getByRole } = render({
      ui: <ErrorDisplay error={error} showRefresh={true} />,
    });

    const refreshButton = getByRole('button', {
      name: i18next.t('button.refresh'),
    });

    fireEvent.click(refreshButton);

    expect(mockReload).toHaveBeenCalledTimes(1);
  });
});
