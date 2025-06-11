import { render } from '@shared/utils/test/render';
import { Header } from './header';
import i18next from 'i18next';

describe('header component', () => {
  it('should render logo in header', () => {
    const { getByText } = render({ ui: <Header /> });
    expect(getByText(i18next.t('a11y.logo'))).toBeInTheDocument();
  });
});
