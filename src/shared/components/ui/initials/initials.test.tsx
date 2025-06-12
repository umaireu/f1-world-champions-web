import { render } from '@shared/utils/test/render';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Initials } from './initials';

describe('Initials component', () => {
  it('renders single name correctly', () => {
    render({ ui: <Initials name='John' /> });
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders full name with two initials', () => {
    render({ ui: <Initials name='John Doe' /> });
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders multiple names with only first two initials', () => {
    render({ ui: <Initials name='John Michael Doe Smith' /> });
    expect(screen.getByText('JM')).toBeInTheDocument();
  });

  it('converts initials to uppercase', () => {
    render({ ui: <Initials name='john doe' /> });
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('handles single character names', () => {
    render({ ui: <Initials name='A B' /> });

    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('handles names with extra spaces', () => {
    render({ ui: <Initials name='  John   Doe  ' /> });

    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('handles special characters in names', () => {
    render({ ui: <Initials name='Jean-Paul Marie' /> });

    expect(screen.getByText('JM')).toBeInTheDocument();
  });

  it('handles numbers in names', () => {
    render({ ui: <Initials name='John2 Doe3' /> });

    expect(screen.getByText('JD')).toBeInTheDocument();
  });
});
