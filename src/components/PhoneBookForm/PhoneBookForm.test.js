import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PhoneBookForm } from './PhoneBookForm';

const mock = {
  entry: {
    firstName: 'John',
    lastName: 'Doe',
    phone: '+123456789'
  },
  empty: {
    firstName: '',
    lastName: '',
    phone: ''
  },
  onAdd: (user) => console.log(user)
};

test('renders elements correctly.', () => {
  render(<PhoneBookForm onAdd={mock.onAdd} />);

  const inputFirstName = screen.getByTestId('first-name');
  const inputLastName = screen.getByTestId('last-name');
  const inputPhone = screen.getByTestId('phone');
  const btnSubmit = screen.getByTestId('btn-submit');

  expect(inputFirstName).toBeInTheDocument();
  expect(inputLastName).toBeInTheDocument('');
  expect(inputPhone).toBeInTheDocument('');
  expect(btnSubmit).toBeInTheDocument('');
});

test('check if phone entry was added properly when valid fields were provided.', () => {
  render(<PhoneBookForm onAdd={mock.onAdd} />);

  const inputFirstName = screen.getByTestId('first-name');
  const inputLastName = screen.getByTestId('last-name');
  const inputPhone = screen.getByTestId('phone');
  const btnSubmit = screen.getByTestId('btn-submit');

  // change values
  fireEvent.change(inputFirstName, { target: { value: mock.entry.firstName } });
  fireEvent.change(inputLastName, { target: { value: mock.entry.lastName } });
  fireEvent.change(inputPhone, { target: { value: mock.entry.phone } });

  // trigger submit event
  act(() => userEvent.click(btnSubmit));

  expect(inputFirstName).toHaveValue('');
  expect(inputLastName).toHaveValue('');
  expect(inputPhone).toHaveValue('');
});

test('check if error message renders when add event triggerd with empty fields.', () => {
  render(<PhoneBookForm onAdd={mock.onAdd} />);

  const inputFirstName = screen.getByTestId('first-name');
  const inputLastName = screen.getByTestId('last-name');
  const inputPhone = screen.getByTestId('phone');
  const btnSubmit = screen.getByTestId('btn-submit');

  // change values
  fireEvent.change(inputFirstName, { target: { value: mock.empty.firstName } });
  fireEvent.change(inputLastName, { target: { value: mock.empty.lastName } });
  fireEvent.change(inputPhone, { target: { value: mock.empty.phone } });

  // trigger submit event
  act(() => userEvent.click(btnSubmit));

  expect(screen.getByTestId('error-message'));
});
