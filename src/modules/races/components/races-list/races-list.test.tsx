import i18n from '@translations/index';
import { MockRacesData2025 } from '../../../../mocks/mock-data/races-mock-data';
import { RacesList } from './races-list';

import { render } from '@utils/test/render';

describe('races-list component', () => {
  it('should successfully render race table columns', () => {
    const { getByText } = render({
      ui: <RacesList races={[]} />,
    });
    expect(getByText(i18n.t('races.column.raceName'))).toBeInTheDocument();
    expect(getByText(i18n.t('races.column.circuitName'))).toBeInTheDocument();
    expect(getByText(i18n.t('races.column.date'))).toBeInTheDocument();
    expect(getByText(i18n.t('races.column.winnerDriver'))).toBeInTheDocument();
    expect(getByText(i18n.t('races.column.time'))).toBeInTheDocument();
  });
  it('should successfully render races table rows', () => {
    const { getByText, getAllByText } = render({
      ui: <RacesList races={MockRacesData2025} />,
    });
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
});
