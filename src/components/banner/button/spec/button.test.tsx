import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../button';

describe('Button component', () => {
  it('should render with the correct text', () => {
    render(<Button variant="contained" color="secondary" onClick={jest.fn()} children='Click me!' />);
    const buttonText = screen.getByRole('button');
    screen.debug();
    expect(screen.getByRole('button')).toBeInTheDocument();
});

  it('should call the onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button variant="contained" color="secondary" onClick={onClick}>Click me!</Button>);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render with the correct variant and color', () => {
    const { getByRole } = render(<Button variant="contained" color="secondary" onClick={jest.fn()}>Click me!</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('MuiButton-containedSecondary');
  });
});
