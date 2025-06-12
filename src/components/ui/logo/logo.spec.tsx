import { render } from '@utils/test/render';
import { Logo } from './logo';
import i18next from 'i18next';

describe('logo component', () => {
  it('should render successfully', () => {
    const { getByRole } = render({ ui: <Logo /> });
    const logo = getByRole('img', { name: i18next.t('a11y.logo') });
    expect(logo).toBeInTheDocument();
  });
});
