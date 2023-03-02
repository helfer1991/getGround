import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { ButtonLink } from '../button-link';

describe('ButtonLink component', () => {
  it('should render with the correct text', () => {
    render(
      <MemoryRouter>
        <ButtonLink to="/test">Test link</ButtonLink>
      </MemoryRouter>
    );

    expect(screen.getByText('Test link')).toBeInTheDocument();
  });

  it('should render with the correct variant', () => {
    render(
      <MemoryRouter>
        <ButtonLink to="/test" variant="light">Test link</ButtonLink>
      </MemoryRouter>
    );

    expect(screen.getByText('Test link')).toHaveStyle('color: rgb(66, 165, 245)');
  });

  it('should render with the correct href attribute', () => {
    render(
      <MemoryRouter>
        <ButtonLink to="/test">Test link</ButtonLink>
      </MemoryRouter>
    );

    expect(screen.getByText('Test link')).toHaveAttribute('href', '/test');
  });
});
