import { books, navigation } from '../../../redux/reducers';

describe('books reducer ', () => {
  test('should return default state as an object with allBooks property as empty array', () => {
    expect(Array.isArray(books(undefined, 'SAMPLE_ACTION').allBooks)).toBe(true);
  });
});

describe('books reducer', () => {
  test('should return default state as an object with page property as \'books\'', () => {
    expect(navigation(undefined, 'SAMPLE_ACTION')).toEqual({
      page: 'books',
    });
  });
});
