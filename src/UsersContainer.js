import React, { useState } from 'react';
import UserList from './UserList';

export default () => {
  let [selection, setSelection] = useState({2: true});

  function onChangeSelection(selection) {
    const newSelection = {};
    Object.keys(selection).forEach((item) => {
      newSelection[item] = true;
    });
    setSelection(newSelection);
  }

  const data = [
    {id: '1', first: 'User', last: 'One' },
    {id: '2', first: 'User', last: 'Two' },
    {id: '3', first: 'User', last: 'Three' },
    {id: '4', first: 'User', last: 'Four' },
    {id: '5', first: 'User', last: 'Five' },
  ];

  return (
    <UserList data={data} selection={selection} onChangeSelection={onChangeSelection} />
  );
}
