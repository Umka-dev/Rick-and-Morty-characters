export const CHARACTER_API_URL = 'https://rickandmortyapi.com/api/character/';
export const ALL_SPECIES_NAME = 'All Species';
export enum FILTER_NAMES {
  name = 'name',
  status = 'status',
  gender = 'gender',
}

export enum CHARACTER_STATUS {
  alive = 'alive',
  dead = 'dead',
  unknown = 'unknown',
}

export enum CHARACTER_GENDER {
  male = 'male',
  female = 'female',
  genderless = 'genderless',
  unknown = 'unknown',
}

export const STATUS_OPTIONS = Object.values(CHARACTER_STATUS);
export const GENDER_OPTIONS = Object.values(CHARACTER_GENDER);
