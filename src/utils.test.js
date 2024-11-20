import { capitalFirst } from './utils';

describe('capitalFirst', () => {
  test('should return correct string', () => {
    expect(capitalFirst('asd')).toEqual('Asd');
  });
});
