import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders F1 World Champions heading', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });
});
