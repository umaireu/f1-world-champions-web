import type { Season } from '@api-types/index';

export const MockSeasonsData: Season[] = [
  {
    season: '2025',
    points: '600',
    championDriver: {
      driverId: 'verstappen',
      name: 'Max Verstappen',
    },
    championConstructor: {
      constructorId: 'red_bull',
      name: 'Red Bull Racing',
    },
  },
  {
    season: '2024',
    points: '580',
    championDriver: {
      driverId: 'norris',
      name: 'Lando Norris',
    },
    championConstructor: {
      constructorId: 'mclaren',
      name: 'McLaren',
    },
  },
  {
    season: '2023',
    points: '575',
    championDriver: {
      driverId: 'leclerc',
      name: 'Charles Leclerc',
    },
    championConstructor: {
      constructorId: 'ferrari',
      name: 'Ferrari',
    },
  },
  {
    season: '2022',
    points: '454',
    championDriver: {
      driverId: 'russell',
      name: 'George Russell',
    },
    championConstructor: {
      constructorId: 'mercedes',
      name: 'Mercedes',
    },
  },
  {
    season: '2021',
    points: '395',
    championDriver: {
      driverId: 'sainz',
      name: 'Carlos Sainz Jr.',
    },
    championConstructor: {
      constructorId: 'ferrari',
      name: 'Ferrari',
    },
  },
  {
    season: '2020',
    points: '347',
    championDriver: {
      driverId: 'hamilton',
      name: 'Lewis Hamilton',
    },
    championConstructor: {
      constructorId: 'mercedes',
      name: 'Mercedes',
    },
  },
];
