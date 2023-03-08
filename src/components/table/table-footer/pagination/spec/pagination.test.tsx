import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Pagination } from '../pagination';

const propsFirstPage = {
    count: 100,
    page: 0,
    rowsPerPage: 10,
    onPageChange: jest.fn(),
};

const propsFourthPage = {
    count: 100,
    page: 4,
    rowsPerPage: 10,
    onPageChange: jest.fn(),
};

describe('Pagination component', () => {
    it('should render four buttons', () => {
      render(<Pagination {...propsFirstPage} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBe(4);
    });

    it('should disable "First Page" and "Previous Page" buttons on first page', () => {
      render(<Pagination {...propsFirstPage} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons[0]).toBeDisabled(); // First Page
      expect(buttons[1]).toBeDisabled(); // Previous Page
    });

    it('should enable "Next Page" and "Last Page" buttons on first page', () => {
      render(<Pagination {...propsFirstPage} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons[2]).toBeEnabled(); // Next Page
      expect(buttons[3]).toBeEnabled(); // Last Page
    });

    it('should enable "First Page" and "Previous Page" buttons on fourth page', () => {
        render(<Pagination {...propsFourthPage} />);
        const buttons = screen.getAllByRole('button');
        expect(buttons[0]).toBeEnabled(); // Next Page
        expect(buttons[1]).toBeEnabled(); // Last Page
      });

    it('should call the onPageChange callback with the next page when "Next Page" button is clicked', () => {
      render(<Pagination {...propsFirstPage} />);
      const buttons = screen.getAllByRole('button');
      fireEvent.click(buttons[2]); // Next Page
      expect(propsFirstPage.onPageChange).toHaveBeenCalledWith(expect.anything(), 1);
    });
    
    it('should call the onPageChange callback with the last page when "Last Page" button is clicked', () => {
      render(<Pagination {...propsFirstPage} />);
      const buttons = screen.getAllByRole('button');
      fireEvent.click(buttons[3]); // Last Page
      expect(propsFirstPage.onPageChange).toHaveBeenCalledWith(expect.anything(), 9);
    });
});
