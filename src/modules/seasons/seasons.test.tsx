import { fireEvent, waitFor } from '@testing-library/react';
import { render } from '@utils/test/render';
import Seasons from './seasons';
import i18next from 'i18next';
import { MockSeasonsData } from '@mocks/mock-data/seasons-mock-data';
import { ROUTE_PATH } from '@routes/constants';
import { buildRoute } from '@utils/utils';

const mockNavigate = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('seasons module', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should show loading state initially and then display data', async () => {
    const { getByText, queryByText } = render({
      ui: <Seasons />,
      withRouter: true,
    });

    // Check that loading is shown initially
    expect(getByText(i18next.t('loading'))).toBeInTheDocument();

    // Wait for data to load and loading to disappear
    await waitFor(() => {
      expect(getByText(i18next.t('seasons.title'))).toBeInTheDocument();
    });

    // Verify loading is no longer visible
    expect(queryByText(i18next.t('loading'))).not.toBeInTheDocument();

    // Verify data is displayed
    const [firstSeason, secondSeason] = MockSeasonsData;
    expect(getByText(firstSeason.season)).toBeInTheDocument();
    expect(getByText(firstSeason.championDriver.name)).toBeInTheDocument();
    expect(getByText(firstSeason.championConstructor.name)).toBeInTheDocument();
    expect(getByText(firstSeason.points)).toBeInTheDocument();

    expect(getByText(secondSeason.season)).toBeInTheDocument();
    expect(getByText(secondSeason.points)).toBeInTheDocument();
    expect(getByText(secondSeason.championDriver.name)).toBeInTheDocument();
    expect(
      getByText(secondSeason.championConstructor.name),
    ).toBeInTheDocument();
  });

  it('should navigate to races page on click of view races button', async () => {
    const { getByText, getAllByRole } = render({
      ui: <Seasons />,
      withRouter: true,
    });

    // Wait for data to load and loading to disappear
    await waitFor(() => {
      expect(getByText(i18next.t('seasons.title'))).toBeInTheDocument();
    });

    const viewRacesButton = getAllByRole('button', {
      name: i18next.t('seasons.viewRaces'),
    });
    fireEvent.click(viewRacesButton[0]);

    expect(mockNavigate).toHaveBeenCalledWith(
      buildRoute(ROUTE_PATH.SEASON_RACES.href, {
        year: MockSeasonsData[0].season,
      }),
    );
  });
});
