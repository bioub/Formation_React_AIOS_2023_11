import { expect, test, vi } from "vitest";
import { genererAlea } from "./genererAlea";

test('genererAlea function', () => {
  vi.spyOn(Math, 'random').mockReturnValue(0.2);
  expect(genererAlea(0, 100)).toBe(20);
})

test('genererAlea function limit 0', () => {
  vi.spyOn(Math, 'random').mockReturnValue(0);
  expect(genererAlea(0, 100)).toBe(0);
})

test('genererAlea function limit 0.9999', () => {
  vi.spyOn(Math, 'random').mockReturnValue(0.99999999999999);
  expect(genererAlea(0, 100)).toBe(100);
})
