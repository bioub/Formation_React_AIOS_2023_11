import { expect, test } from "vitest";
import { totalPairs } from "./totalPairs";

test('totalPairs function', () => {
  expect(totalPairs([1, 2, 3, 4, 5])).toBe(2);
})