import { createRoot } from 'react-dom/client';
import { create } from 'react-test-renderer';
import { beforeEach, describe, expect, test } from 'vitest';
import Hello from './Hello';
import { act } from 'react-dom/test-utils';
import { render, screen } from "@testing-library/react";

beforeEach(() => {
  document.body.innerHTML = '';
})

describe('Hello renders', () => {
  // il faut jsdom ou happy-dom
  test('Hello component renders (ReactDOM)', () => {
    const rootEl = document.createElement('div');
    createRoot(rootEl).render(<Hello />);
  });

  test('Hello component renders (react-test-renderer)', () => {
    create(<Hello />);
  });

  test('Hello component renders (snapshot testing)', () => {
    expect(create(<Hello />).toJSON()).toMatchSnapshot();
  });

  test('Hello component renders (testing-library)', () => {
    render(<Hello />);
  });
});

describe('Hello renders "Hello, world!"', () => {
  test('Hello component renders (ReactDOM)', () => {
    const rootEl = document.createElement('div');

    act(() => {
      createRoot(rootEl).render(<Hello />);
    });

    const hostEl = rootEl.querySelector('.Hello') as HTMLDivElement;
    expect(hostEl.innerText).toBe('Hello, world!');
  });

  test('Hello component renders (testing-library)', () => {
    render(<Hello />);

    expect(screen.queryByText(/Hello, world!/)).toBeInTheDocument();
  });
});
