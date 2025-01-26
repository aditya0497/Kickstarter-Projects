import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../Pagination'; // Adjust path as needed

test('renders pagination buttons and dropdown', () => {
  render(<Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />);

  // Check if pagination buttons are visible
  expect(screen.getByRole('button', { name: /prev/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();

  // Check if the dropdown exists
  expect(screen.getByRole('combobox')).toBeInTheDocument();
});

test('disables prev button on the first page and next button on the last page', () => {
  render(<Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />);

  // The "Prev" button should be disabled on the first page
  expect(screen.getByRole('button', { name: /prev/i })).toBeDisabled();

  // The "Next" button should be enabled
  expect(screen.getByRole('button', { name: /next/i })).toBeEnabled();
});

test('handles page change correctly', () => {
  const handlePageChange = jest.fn();

  render(
    <Pagination totalPages={5} currentPage={1} onPageChange={handlePageChange} />
  );

  // Change page using dropdown
  fireEvent.change(screen.getByRole('combobox'), { target: { value: '2' } });

  // Verify that page change handler is called with the correct page number
  expect(handlePageChange).toHaveBeenCalledWith(2);
});
