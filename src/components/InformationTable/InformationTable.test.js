import React from 'react';
import { render, screen } from '@testing-library/react';
import { InformationTable } from './InformationTable';

const mockPhoneBookList = [
  { firstName: 'John', lastName: 'Doe', phone: '+123456789' },
  { firstName: 'Jake', lastName: 'Man', phone: '+156678945' },
  { firstName: 'Martin', lastName: 'Lindgren', phone: '+198456789' }
];

test('check if phone book table renders properly', () => {
  render(<InformationTable phoneBookList={mockPhoneBookList} />);
  const phoneBookElements = screen.getAllByTestId('phone-book-entry');
  expect(phoneBookElements.length).toEqual(mockPhoneBookList.length);
});
