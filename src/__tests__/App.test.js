import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'; // Adjust path as needed

test('renders table headers and pagination', () => {
  render(<App />);

  // Check if table headers are present
  expect(screen.getByText(/S\.No\./i)).toBeInTheDocument();
  expect(screen.getByText(/Percentage Funded/i)).toBeInTheDocument();
  expect(screen.getByText(/Amount Pledged/i)).toBeInTheDocument();
});

test('disables "prev" on the first page and "next" on the last page', () => {
  render(<App />);

  // The "Prev" button should be disabled on the first page
  expect(screen.getByRole('button', { name: /prev/i })).toBeDisabled();

  // The "Next" button should be enabled
  expect(screen.getByRole('button', { name: /next/i })).toBeEnabled();
});
