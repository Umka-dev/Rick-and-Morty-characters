import { ICharacter } from './types/types';

export const fetcher = (url: string): Promise<ICharacter[]> =>
  fetch(url).then((res) => res.json());

export const capitalFirst = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const removeEmptyKeys = (
  obj: Record<string, any>,
): Record<string, string> => {
  return Object.entries(obj).reduce(
    (acc: Record<string, string>, [key, value]) => {
      if (value != null && value !== '') {
        acc[key] = String(value);
      }
      return acc;
    },
    {},
  );
};
