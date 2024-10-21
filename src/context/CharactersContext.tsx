import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {
  ICharacter,
  ICharacterContext,
  ICharacterFilter,
} from '../types/types';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { ALL_SPECIES_NAME, FILTER_NAMES } from '../constants';
import { useCharactersApi } from '../hooks/useCharactersApi';
import { removeEmptyKeys } from '../utils';

// 1. Defining the initial state of the context
const defaultContextValue: ICharacterContext = {
  characters: [],
  error: null,
  totalCount: 0,
  hasNextPage: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleNextPage: () => {},
  isValidating: false,
  speciesList: [],
  selectedSpecies: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleChipClick: () => {},
  filteredCharacters: [],
  searchParams: new URLSearchParams(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleApplyFilters: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleResetFilters: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleSearchNavigate: () => {},
};

// Create CONTEXT
const CharactersContext = createContext<ICharacterContext>(defaultContextValue);

// Create PROVIDER
export const CharactersContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // ---States for Search Bar
  const navigate = useNavigate();
  // States for Search Bar---

  // ---States for Species Chips
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>(
    [],
  );
  // States for Species Chips---

  // ---States for Filter Panel
  const [searchParams, setSearchParams] = useSearchParams();
  // States for Filter Panel---

  // Get species list, handler for Species Chips---
  const {
    characters,
    totalCount,
    hasNextPage,
    handleNextPage,
    error,
    isValidating,
    speciesList,
  } = useCharactersApi(searchParams);

  useEffect(() => {
    if (!selectedSpecies.length) {
      setFilteredCharacters(characters);
    } else {
      setFilteredCharacters(
        characters.filter(({ species }) => selectedSpecies.includes(species)),
      );
    }
  }, [characters, selectedSpecies]);

  const handleChipClick = (species: ICharacter['species']) => {
    setSelectedSpecies((prevSelected) => {
      if (species === ALL_SPECIES_NAME) {
        return [];
      }

      const isSelected = prevSelected.includes(species);

      if (isSelected) {
        return prevSelected.filter(
          (selectedSpecies) => selectedSpecies !== species,
        );
      }

      return [...prevSelected, species];
    });
  };
  // Get species list, filter characters and handlers for Species Chips---

  // ---Handlers for Search Bar
  const handleSearchNavigate = (value: string) => {
    let url = '/search/';

    if (value) {
      url = `${url}?${FILTER_NAMES.name}=${value.toLowerCase()}`;
    }

    navigate(url);
    setSelectedSpecies([]);
  };

  // Handlers for Filter Panel---
  const handleApplyFilters = (filtersData: ICharacterFilter) => {
    setSearchParams(new URLSearchParams(removeEmptyKeys(filtersData)));
  };

  const handleResetFilters = () => {
    setSearchParams();
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        error,
        totalCount,
        hasNextPage,
        handleNextPage,
        isValidating,
        speciesList,
        selectedSpecies,
        handleChipClick,
        filteredCharacters,
        searchParams,
        handleApplyFilters,
        handleResetFilters,
        handleSearchNavigate,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

// Create the HOOK for using Characters Context
export const useCharactersContext = () => useContext(CharactersContext);
