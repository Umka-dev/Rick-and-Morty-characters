import React, { useState, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import { ICharacter, IData } from '../types/types';

import { fetcher } from '../utils';

import { ALL_SPECIES_NAME, CHARACTER_API_URL } from '../constants';

/**
 * Custom hook to fetch characters
 */

const useCharactersApi = (searchParams: URLSearchParams) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  const [speciesList, setSpeciesList] = useState<string[]>([]);

  const getKey = React.useCallback(
    (_: number, prevCharacters: IData) => {
      if (prevCharacters?.info) {
        return prevCharacters.info.next;
      }

      if (searchParams) {
        return `${CHARACTER_API_URL}?${searchParams.toString()}`;
      }

      return CHARACTER_API_URL;
    },
    [searchParams],
  );

  const { data, error, setSize, isValidating } = useSWRInfinite<IData, Error>(
    getKey,
    fetcher,
  );

  useEffect(() => {
    if (!data?.[0]) return;
    if (data[0].error) {
      setCharacters([]);
      setHasNextPage(false);
      return;
    }

    const allCharacters = data
      .flatMap((data: IData) => data.results)
      .filter((character): character is ICharacter => character !== undefined); //Filtering ensures that the allCharacters array contains only elements of type Character.
    const count = data[0].info?.count ?? 0; //We use the "zero coalesce" operator (??) to set the default value to 0 if count is undefined.
    const nextPage = data[data.length - 1].info?.next;

    setCharacters(allCharacters);
    setTotalCount(count);
    setHasNextPage(Boolean(nextPage));
  }, [data]);

  useEffect(() => {
    const allSpecies = [
      ALL_SPECIES_NAME,
      ...new Set(characters.map(({ species }) => species)),
    ];
    setSpeciesList(allSpecies);
  }, [characters]);

  const handleNextPage = () => {
    setSize((prevSize: number) => prevSize + 1);
  };

  return {
    characters,
    totalCount,
    hasNextPage,
    error,
    handleNextPage,
    isValidating,
    speciesList,
  };
};

export { useCharactersApi };
