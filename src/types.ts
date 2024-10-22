import { Control } from 'react-hook-form';
import { CHARACTER_STATUS, CHARACTER_GENDER } from './constants';

export type CharacterFilterControl = Control<ICharacterFilter>; //Control<FieldValues> from library react-hook-form

export interface IData {
  info?: {
    count: number;
    next: null | string;
    pages: number;
    prev: null | string;
  };
  results?: ICharacter[];
  error?: Error;
}

interface ICharacterLocation {
  name: string;
  url: string;
}

interface IResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface ICharacter extends IResourceBase {
  status: CHARACTER_STATUS;
  species: string;
  type: string;
  gender: CHARACTER_GENDER;
  origin: ICharacterLocation;
  location: ICharacterLocation;
  image: string;
  episode?: string[];
}

export interface ICharacterFilter {
  name?: string;
  type?: string;
  species?: string;
  status?: CHARACTER_STATUS;
  gender?: CHARACTER_GENDER;
  page?: number;
}

export interface ICharacterContext {
  characters: ICharacter[];
  error?: Error | null;
  totalCount: number;
  hasNextPage: boolean;
  handleNextPage: () => void;
  isValidating: boolean;
  speciesList: string[];
  selectedSpecies: string[];
  handleChipClick: (species: string) => void;
  filteredCharacters: ICharacter[];
  searchParams: URLSearchParams;
  handleApplyFilters: (filtersData: ICharacterFilter) => void;
  handleResetFilters: () => void;
  handleSearchNavigate: (name: string) => void;
}
