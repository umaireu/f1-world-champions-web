import { render } from '@utils/test/render';
import { Routes } from './routes';
import { ROUTE_PATH } from './constants';
import i18next from 'i18next';

// Mock the components

vi.mock('@modules/index', () => ({
  Seasons: () => <div>Seasons Component</div>,
  Races: () => <div>Races Component</div>,
}));

describe('route component', () => {
  it('should redirect from default route to seasons route', () => {
    const { getByText } = render({
      ui: <Routes />,
      withRouter: true,
      routeInitialEntries: [ROUTE_PATH.DEFAULT.href],
    });

    expect(getByText('Seasons Component')).toBeInTheDocument();
  });

  it('should render Seasons component for /seasons route', () => {
    const { getByText } = render({
      ui: <Routes />,
      withRouter: true,
      routeInitialEntries: [ROUTE_PATH.SEASONS.href],
    });

    expect(getByText('Seasons Component')).toBeInTheDocument();
  });

  it(`should render Races component for ${ROUTE_PATH.SEASON_RACES.href} route`, () => {
    const { getByText } = render({
      ui: <Routes />,
      withRouter: true,
      routeInitialEntries: [ROUTE_PATH.SEASON_RACES.href],
    });

    expect(getByText('Races Component')).toBeInTheDocument();
  });

  it('should render PageNotFound component for unknown routes', () => {
    const { getByText } = render({
      ui: <Routes />,
      withRouter: true,
      routeInitialEntries: ['/unknown'],
    });

    expect(getByText(i18next.t('pageNotFound.title'))).toBeInTheDocument();
  });
});
