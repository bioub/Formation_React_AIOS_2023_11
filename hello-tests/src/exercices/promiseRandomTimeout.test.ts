import { expect, test, vi } from "vitest";
import { promiseRandomTimeout } from "./promiseRandomTimeout";

test('promiseRandomTimeout function', async () => {
  const val = await promiseRandomTimeout('ABC');
  expect(val).toBe('ABC');
});

test('promiseRandomTimeout function', async () => {
  vi.useFakeTimers();
  const promise = promiseRandomTimeout('ABC');
  vi.advanceTimersByTime(1000);
  const val = await promise;
  expect(val).toBe('ABC');
  vi.useRealTimers();
});

