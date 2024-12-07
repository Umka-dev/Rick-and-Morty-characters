import { CHARACTER_STATUS } from './constants';
import { capitalFirst, fetcher, removeEmptyKeys } from './utils';

describe('utils', () => {
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

  describe('fetcher', () => {
    // Mock the global fetch function
    global.fetch = jest.fn();
    beforeEach(() => {
      jest.clearAllMocks();
    });

    const url = 'https://api.example.com/data';

    test('should fetch data and return it as JSON', async () => {
      // Arrange
      const mockData = { key: 'value' };
      const mockResponse = {
        json: jest.fn().mockResolvedValue(mockData),
      };

      (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

      // Act
      const expected = await fetcher<typeof mockData>(url);

      // Assert
      expect(global.fetch).toHaveBeenCalledTimes(1); // Ensure fetch was called
      expect(global.fetch).toHaveBeenCalledWith(url); // Ensure fetch was called with the correct URL
      expect(mockResponse.json).toHaveBeenCalledTimes(1); // Ensure json() was called
      expect(expected).toEqual(mockData); // Ensure the result matches the mock data
    });
    test('should throw an error if fetch fails', async () => {
      // Arrange
      const errorMessage = 'Network error';
      const mockError = new Error(errorMessage);
      (global.fetch as jest.Mock).mockRejectedValue(mockError);

      // Act&Assert
      await expect(fetcher(url)).rejects.toThrow(errorMessage);
      expect(global.fetch).toHaveBeenCalledTimes(1); // Ensure fetch was called
      expect(global.fetch).toHaveBeenCalledWith(url); // Ensure fetch was called with the correct URL
    });
  });
});
