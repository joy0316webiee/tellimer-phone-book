import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const mockSearchKey = 'test';

it('check if it renders elements properly', () => {
  render(<App />);

  const searchInput = screen.getByTestId('search-input');
  const phoneBookForm = screen.getByTestId('phone-book-form');
  const InformationTable = screen.getByTestId('information-table');

  fireEvent.change(searchInput, { target: { value: mockSearchKey } });

  expect(searchInput).toBeInTheDocument();
  expect(phoneBookForm).toBeInTheDocument();
  expect(InformationTable).toBeInTheDocument();
});
