import { expect, test } from 'vitest';
import { hello } from './hello';

test('hello function works', () => {
  expect(hello('Romain')).toBe('Hello Romain');
});

test('hello function throws', () => {
  expect(() => hello('')).toThrow();
});