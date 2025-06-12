import { render } from '@utils/test/render';
import { AsyncRenderer } from './async-renderer';
import i18next from 'i18next';

describe('asyncRenderer component', () => {
  const mockData = { id: 1, name: 'Test Data' };

  it('should render loading state by default', () => {
    const { getByText } = render({
      ui: <AsyncRenderer loading={true} error={null} data={null} />,
    });

    expect(getByText(i18next.t('loading'))).toBeInTheDocument();
  });

  it('should render custom loading component when provided', () => {
    const customLoading = () => <div>Custom loading...</div>;

    const { getByText, queryByText } = render({
      ui: (
        <AsyncRenderer
          loading={true}
          error={null}
          data={null}
          renderLoading={customLoading}
        />
      ),
    });

    expect(getByText('Custom loading...')).toBeInTheDocument();
    expect(queryByText(i18next.t('loading'))).not.toBeInTheDocument();
  });

  it('should render error state when error exists', () => {
    const error = new Error('Test error');

    const { getByText } = render({
      ui: <AsyncRenderer loading={false} error={error} data={null} />,
    });

    expect(getByText(i18next.t('error.title'))).toBeInTheDocument();
    expect(getByText(i18next.t('error.message'))).toBeInTheDocument();
  });

  it('should render custom error component when provided', () => {
    const error = new Error('Test error');
    const customError = (err: unknown) => (
      <div>Custom error: {String(err)}</div>
    );

    const { getByText, queryByText } = render({
      ui: (
        <AsyncRenderer
          loading={false}
          error={error}
          data={null}
          renderError={customError}
        />
      ),
    });

    expect(getByText(/Custom error:/)).toBeInTheDocument();
    expect(queryByText(i18next.t('error.title'))).not.toBeInTheDocument();
  });

  it('should render data when provided', () => {
    const renderData = (data: typeof mockData) => <div>Data: {data.name}</div>;

    const { getByText } = render({
      ui: (
        <AsyncRenderer
          loading={false}
          error={null}
          data={mockData}
          renderData={renderData}
        />
      ),
    });

    expect(getByText('Data: Test Data')).toBeInTheDocument();
  });

  it('should return null when no data and no renderData function', () => {
    const { container } = render({
      ui: <AsyncRenderer loading={false} error={null} data={mockData} />,
    });

    expect(container.firstChild).toBeNull();
  });

  it('should return null when data is null', () => {
    const renderData = (data: typeof mockData) => <div>Data: {data.name}</div>;

    const { container } = render({
      ui: (
        <AsyncRenderer
          loading={false}
          error={null}
          data={null}
          renderData={renderData}
        />
      ),
    });

    expect(container.firstChild).toBeNull();
  });
});
