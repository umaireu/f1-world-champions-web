import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders F1 World Champions heading', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      name: /f1 world champions/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders count button', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is/i });
    expect(button).toBeInTheDocument();
  });

  it('displays initial count of 0', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });
});
