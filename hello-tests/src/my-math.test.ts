import { describe, expect, test } from "vitest";
import { multiply, sum } from "./my-math";

describe('my-math module', () => {
  describe('sum function', () => {
    test('sum function (Arrange Act Assert)', () => {
      // Arrange Act Assert / Given When Then
    
      // Arrange (paramètres du test)
      const nb1 = 1;
      const nb2 = 2;
    
      // Act (appel)
      const result = sum(nb1, nb2);
    
      // Assert
      expect(result).toBe(3);
    });
  
    test('sum function (classic)', () => {
      expect(sum(1, 2)).toBe(3);
    })
  })
  
  describe('multiply function', () => {
    test('multiply function (classic)', () => {
      expect(multiply(3, 2)).toBe(6);
    })
  })
})