/**
 * Clean TypeScript interfaces for F1 API client usage
 * Extracted from the auto-generated OpenAPI types
 */

// Champion Driver Interface

export interface ChampionDriver {
  driverId: string;
  name: string;
}
// Champion Constructor Interface
export interface ChampionConstructor {
  /** Constructor ID (e.g., "renault") */
  constructorId: string;
  /** Constructor name (e.g., "Renault") */
  name: string;
}

// Season Interface - This is what you were expecting!
export interface Season {
  /** Season year as string (e.g., "2006") */
  season: string;
  /** Championship points as string (e.g., "134") */
  points: string;
  /** Champion driver information */
  championDriver: ChampionDriver;
  /** Champion constructor information */
  championConstructor: ChampionConstructor;
}

// Winner Driver Interface
export interface WinnerDriver {
  /** Driver ID (e.g., "hamilton") */
  driverId: string;
  /** Driver full name (e.g., "Lewis Hamilton") */
  name: string;
}

// Race Interface
export interface Race {
  /** Race ID */
  id: string;
  /** Race name (e.g., "Monaco Grand Prix") */
  name: string;
  /** Circuit name (e.g., "Circuit de Monaco") */
  circuitName: string;
  /** Race date (e.g., "2023-05-28") */
  date: string;
  /** Race time (e.g., "2023-05-28T15:00:00Z") */
  time: string;
  /** Race winner information */
  winnerDriver: WinnerDriver;
}

// API Response Types
export type SeasonsResponse = {
  data: Season[];
  message?: string;
  count?: number;
};
export type RacesResponse = {
  data: Race[];
  message?: string;
  count?: number;
};

// More specific response types with metadata

// API Parameter Types
export interface SeasonsParams {
  fromYear: number;
  toYear: number;
}

export interface RacesParams {
  year: number;
}
