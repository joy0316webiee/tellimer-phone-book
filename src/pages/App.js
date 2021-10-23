import React, { useState } from 'react';
import { debounce } from 'debounce';

// components
import { PhoneBookForm, InformationTable } from '../components';

const DEBOUNCE_DURATION = 200;

const App = () => {
  const [phoneBookList, setPhoneBookList] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const onAddPhoneBookEntry = (phoneBookEntry) => {
    const newPhoneBookList = [...phoneBookList, phoneBookEntry].sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
    setPhoneBookList(newPhoneBookList);
  };

  const onChangeSearchKey = debounce((value) => {
    setSearchKey(value);
  }, DEBOUNCE_DURATION);

  const isMatched = (value) => value.toLowerCase().includes(searchKey.toLowerCase());

  const filteredPhoneBookList = phoneBookList.filter(({ firstName, lastName, phone }) => {
    return isMatched(firstName) || isMatched(lastName) || isMatched(phone);
  });

  return (
    <div className="flex flex-col p-5">
      <div className="flex items-end mb-10">
        <PhoneBookForm
          onAdd={onAddPhoneBookEntry}
          data-testid="phone-book-form"
        />
        <input
          className="w-80 h-10 ml-5 px-2 py-1 border"
          placeholder="Enter a search key..."
          data-testid="search-input"
          onChange={(e) => onChangeSearchKey(e.target.value)}
        />
      </div>
      <div className="border-t pt-5">
        <InformationTable
          phoneBookList={filteredPhoneBookList}
          data-testid="information-table"
        />
      </div>
    </div>
  );
};

export default App;
