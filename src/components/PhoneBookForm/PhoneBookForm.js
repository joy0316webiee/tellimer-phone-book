import React, { useState } from 'react';

const initState = {
  firstName: '',
  lastName: '',
  phone: ''
};

const PhoneBookForm = ({ onAdd, ...props }) => {
  const [phoneBookEntry, setPhoneBookEntry] = useState(initState);
  const [hasError, setHasError] = useState(false);

  const onChangePhoneBookEntry = (e) => {
    const { name, value } = e.target;
    setPhoneBookEntry({ ...phoneBookEntry, [name]: value });
  };

  const validateFormFields = () => {
    const { firstName, lastName, phone } = phoneBookEntry;
    return firstName && lastName && phone;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateFormFields()) {
      onAdd(phoneBookEntry);
      setHasError(false);
      setPhoneBookEntry(initState);
    } else {
      setHasError(true);
    }
  };

  return (
    <form
      className="flex flex-col p-4 border rounded-sm w-max"
      onSubmit={onSubmit}
      {...props}
    >
      {hasError && (
        <p
          className="text-md text-red-400 mb-5"
          data-testid="error-message"
        >
          Please fill out all fields!
        </p>
      )}
      <label htmlFor="firstName">First Name</label>
      <input
        className="mb-5 border"
        name="firstName"
        data-testid="first-name"
        type="text"
        value={phoneBookEntry.firstName}
        onChange={onChangePhoneBookEntry}
      />

      <label htmlFor="lastName">Last Name </label>
      <input
        className="mb-5 border"
        name="lastName"
        data-testid="last-name"
        type="text"
        value={phoneBookEntry.lastName}
        onChange={onChangePhoneBookEntry}
      />

      <label htmlFor="phone">Phone</label>
      <input
        className="mb-5 border"
        name="phone"
        data-testid="phone"
        type="text"
        value={phoneBookEntry.phone}
        onChange={onChangePhoneBookEntry}
      />

      {/* Submit Button */}
      <button
        className="mt-2 px-4 py-2 border-none bg-blue-500 text-white"
        type="submit"
        data-testid="btn-submit"
      >
        Add User
      </button>
    </form>
  );
};

export { PhoneBookForm };
