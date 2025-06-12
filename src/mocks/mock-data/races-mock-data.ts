import type { Race } from '@api-types/index';

// Mock data for 2025 season races
export const MockRacesData2025: Race[] = [
  {
    id: 'bahrain_2025',
    name: 'Bahrain Grand Prix',
    circuitName: 'Bahrain International Circuit',
    date: '2025-03-02',
    time: '2025-03-02T15:00:00Z',
    winnerDriver: {
      driverId: 'verstappen',
      name: 'Max Verstappen',
    },
    isChampion: true,
  },
  {
    id: 'saudi_arabia_2025',
    name: 'Saudi Arabian Grand Prix',
    circuitName: 'Jeddah Corniche Circuit',
    date: '2025-03-09',
    time: '2025-03-09T17:00:00Z',
    winnerDriver: {
      driverId: 'verstappen',
      name: 'Max Verstappen',
    },
    isChampion: true,
  },
  {
    id: 'australia_2025',
    name: 'Australian Grand Prix',
    circuitName: 'Albert Park Grand Prix Circuit',
    date: '2025-03-16',
    time: '2025-03-16T05:00:00Z',
    winnerDriver: {
      driverId: 'norris',
      name: 'Lando Norris',
    },
    isChampion: false,
  },

  {
    id: 'china_2025',
    name: 'Chinese Grand Prix',
    circuitName: 'Shanghai International Circuit',
    date: '2025-04-20',
    time: '2025-04-20T07:00:00Z',
    winnerDriver: {
      driverId: 'leclerc',
      name: 'Charles Leclerc',
    },
    isChampion: false,
  },
];
