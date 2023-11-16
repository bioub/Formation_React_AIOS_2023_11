import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import TodoInputValue from './TodoInputValue';

test('TodoInputValue renders', () => {
  render(<TodoInputValue value="ABC" onInputChange={() => {}} onTypeEnter={() => {}} />)
});

test('TodoInputValue renders a field containing value', () => {
  render(<TodoInputValue value="ABC" onInputChange={() => {}} onTypeEnter={() => {}} />)
  expect(screen.queryByDisplayValue('ABC')).toBeInTheDocument();
});

test('TodoInputValue calls onInputChange', async () => {
  const spy = vi.fn();

  render(<TodoInputValue value="ABC" onInputChange={spy} onTypeEnter={() => {}} />)

  const field = screen.getByDisplayValue('ABC')

  await userEvent.type(field, 'D');

  expect(spy).toHaveBeenCalledWith('ABCD');
});

test('TodoInputValue calls onTypeEnter', async () => {
  const spy = vi.fn();

  render(<TodoInputValue value="ABC" onInputChange={() => {}} onTypeEnter={spy} />)

  const field = screen.getByDisplayValue('ABC')

  await userEvent.type(field, 'DEF{enter}');

  expect(spy).toHaveBeenCalledWith();
});
