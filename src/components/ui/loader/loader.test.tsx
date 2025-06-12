import i18n from 'i18next';
import { render } from '@utils/test/render';
import { Loader } from './loader';

describe('loader', () => {
  it('shows loading message', () => {
    const message = 'Loading data';
    const { getByText } = render({ ui: <Loader message={message} /> });
    expect(getByText(message)).toBeInTheDocument();
  });

  it('shows sub message when provided', () => {
    const message = 'Loading data';
    const subMessage = 'Please wait...';

    const { getByText } = render({
      ui: <Loader message={message} subMessage={subMessage} />,
    });

    expect(getByText(message)).toBeInTheDocument();
    expect(getByText(subMessage)).toBeInTheDocument();
  });

  it('shows default translated message when no message provided', () => {
    const { getByText } = render({ ui: <Loader /> });

    expect(getByText(i18n.t('loading'))).toBeInTheDocument();
  });
});
