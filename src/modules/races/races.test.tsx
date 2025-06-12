import { fireEvent, waitFor } from '@testing-library/react';
import { render } from '@utils/test/render';
import Races from './races';
import i18next from 'i18next';
import { MockRacesData2025 } from '../../mocks/mock-data/races-mock-data';
import { ROUTE_PATH } from '@routes/constants';

// Mock the navigate hook and useParams
const mockNavigate = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useParams: () => ({ year: '2025' }),
  };
});

describe('races module', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should show loading state initially and then display data', async () => {
    const { getByText, queryByText, getAllByText } = render({
      ui: <Races />,
      withRouter: true,
    });

    // Check that loading is shown initially
    expect(getByText(i18next.t('loading'))).toBeInTheDocument();

    // Wait for data to load and loading to disappear
    await waitFor(() => {
      expect(
        getByText(i18next.t('races.title', { season: 2025 })),
      ).toBeInTheDocument();
    });

    // Verify loading is no longer visible
    expect(queryByText(i18next.t('loading'))).not.toBeInTheDocument();

    // Verify data is displayed
    const [firstRace, secondRace] = MockRacesData2025;
    expect(getByText(firstRace.name)).toBeInTheDocument();
    expect(getByText(firstRace.circuitName)).toBeInTheDocument();
    expect(getByText(firstRace.date)).toBeInTheDocument();
    expect(getByText(firstRace.time)).toBeInTheDocument();
    expect(getAllByText(firstRace.winnerDriver.name)).toHaveLength(2);

    expect(getByText(secondRace.name)).toBeInTheDocument();
    expect(getByText(secondRace.date)).toBeInTheDocument();
    expect(getByText(secondRace.time)).toBeInTheDocument();
    expect(getByText(secondRace.circuitName)).toBeInTheDocument();
    expect(getAllByText(secondRace.winnerDriver.name)).toHaveLength(2);
  });
  it('on click of back button, should navigate to seasons page', () => {
    const { getByRole } = render({
      ui: <Races />,
      withRouter: true,
    });
    const backButton = getByRole('button', {
      name: i18next.t('button.goBack'),
    });
    fireEvent.click(backButton);
    expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.SEASONS.href);
  });
});
