import {
  get,
  equal,
  capitalizeFirstLetter,
  isEmptyObject,
} from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('홍길동');
  expect(g(state)).toBeUndefined();
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  const f = equal('name', '홍길동');
  const g = equal('name', '임꺽정');

  expect(f(state)).toBeTruthy();
  expect(g(state)).toBeFalsy();
});

test('capitalizeFirstLetter', () => {
  expect(capitalizeFirstLetter('home')).toBe('Home');
  expect(capitalizeFirstLetter('about')).toBe('About');
});

test('isEmptyObject', () => {
  expect(isEmptyObject({})).toBe(true);

  expect(isEmptyObject({
    id: 1,
  })).toBe(false);

  expect(isEmptyObject('')).toBe(false);

  expect(isEmptyObject(null)).toBe(false);
});
