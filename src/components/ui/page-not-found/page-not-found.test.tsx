import { render } from '@utils/test/render';
import { PageNotFound } from './page-not-found';
import i18next from 'i18next';

describe('page not found component', () => {
  it('should render 404 error number', () => {
    const { getByText } = render({ ui: <PageNotFound />, withRouter: true });

    expect(getByText('404')).toBeInTheDocument();
  });

  it('should render page not found title', () => {
    const { getByText } = render({ ui: <PageNotFound />, withRouter: true });

    expect(getByText(i18next.t('pageNotFound.title'))).toBeInTheDocument();
  });

  it('should render page not found description', () => {
    const { getByText } = render({ ui: <PageNotFound />, withRouter: true });

    expect(
      getByText(i18next.t('pageNotFound.description')),
    ).toBeInTheDocument();
  });

  it('should render link to home page', () => {
    const { getByText } = render({ ui: <PageNotFound />, withRouter: true });

    const homeLink = getByText(i18next.t('pageNotFound.gotToHome'));
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });
});
