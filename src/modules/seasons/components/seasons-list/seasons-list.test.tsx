import i18n from '@translations/index';
import { MockSeasonsData } from '../../../../mocks/mock-data/seasons-mock-data';
import { SeasonsList } from './seasons-list';

import { render } from '@utils/test/render';

describe('seasons-list component', () => {
  it('should successfully render season table columns', () => {
    const { getByText } = render({
      ui: <SeasonsList seasons={MockSeasonsData} />,
    });
    expect(getByText(i18n.t('seasons.column.season'))).toBeInTheDocument();
    expect(
      getByText(i18n.t('seasons.column.driverChampion')),
    ).toBeInTheDocument();
    expect(
      getByText(i18n.t('seasons.column.constructorChampion')),
    ).toBeInTheDocument();
    // expect(getByText(i18n.t('seasons.column.points'))).toBeInTheDocument();
    expect(getByText(i18n.t('seasons.column.actions'))).toBeInTheDocument();
  });
  it('should successfully render season table rows', () => {
    const { getByText } = render({
      ui: <SeasonsList seasons={MockSeasonsData} />,
    });
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
});
