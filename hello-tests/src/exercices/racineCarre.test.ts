import { expect, test } from "vitest";
import { racineCarre } from "./racineCarre";

test('racineCarre function', () => {
  expect(racineCarre(4)).toBe(2);
})

test('racineCarre function throws', () => {
  expect(() => racineCarre(-1)).toThrow()
})