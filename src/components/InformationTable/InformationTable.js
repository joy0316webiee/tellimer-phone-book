import React from 'react';

const InformationTable = ({ phoneBookList = [], ...props }) => (
  <table {...props}>
    <thead>
      <tr>
        <th className="border m-0 px-4 py-2 w-80">First name</th>
        <th className="border m-0 px-4 py-2 w-80">Last name</th>
        <th className="border m-0 px-4 py-2 w-80">Phone</th>
      </tr>
    </thead>
    <tbody>
      {phoneBookList.map(({ firstName, lastName, phone }, idx) => (
        <tr key={idx} data-testid="phone-book-entry">
          <td className="border m-0 px-4 py-2 w-80">{firstName}</td>
          <td className="border m-0 px-4 py-2 w-80">{lastName}</td>
          <td className="border m-0 px-4 py-2 w-80">{phone}</td>
        </tr>
        ))}
    </tbody>
  </table>
);

export { InformationTable };
