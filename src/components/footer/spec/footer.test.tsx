import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '../footer';

describe('Footer component', () => {
  it('should render the footer with the correct text', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByTestId('footerTestId')).toBeInTheDocument();
    expect(screen.getByText('GetGround Books')).toBeInTheDocument();
  });
});
