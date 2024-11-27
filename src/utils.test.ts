import { CHARACTER_STATUS } from './constants';
import { capitalFirst, removeEmptyKeys } from './utils';

describe('capitalFirst', () => {
  test('should return correct string', () => {
    expect(capitalFirst('asd')).toBe('Asd');
  });
});

describe('removeEmptyKeys', () => {
  test('should remove empty key: value from an object', () => {
    const expected = { name: 'morty', status: CHARACTER_STATUS.alive };
    expect(
      removeEmptyKeys({
        ...expected,
        gender: undefined,
      }),
    ).toStrictEqual(expected);
  });
});
