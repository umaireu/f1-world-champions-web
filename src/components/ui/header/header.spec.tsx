import { render } from '@utils/test/render';
import { Header } from './header';
import i18next from 'i18next';

describe('header component', () => {
  it('should render logo in header', () => {
    const { getByRole } = render({ ui: <Header /> });
    const logo = getByRole('img', { name: i18next.t('a11y.logo') });
    expect(logo).toBeInTheDocument();
  });
});
