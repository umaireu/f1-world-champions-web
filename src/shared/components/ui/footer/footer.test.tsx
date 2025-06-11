import { render } from '@shared/utils/test/render';
import { Footer } from './footer';
import i18next from 'i18next';

describe('footer component', () => {
  it('should render footer successfully', () => {
    const currentYear = new Date().getFullYear();

    const { getByText } = render({ ui: <Footer /> });
    expect(
      getByText(i18next.t('footer.copyright', { year: currentYear })),
    ).toBeInTheDocument();
  });
});
