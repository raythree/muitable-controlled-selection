import React, { useState } from 'react';
import UserList from './UserList';

const data = [
  {id: '1', first: 'User', last: 'One' },
  {id: '2', first: 'User', last: 'Two' },
  {id: '3', first: 'User', last: 'Three' },
  {id: '4', first: 'User', last: 'Four' },
  {id: '5', first: 'User', last: 'Five' },
];

export default () => {
  let [selection, setSelection] = useState({});

  const onChangeSelection = (selection) => {
    setSelection(selection);    
  };

  return (
    <UserList 
      data={data} 
      selection={selection} 
      onChangeSelection={onChangeSelection} 
      selectOnRowClick={true}
    />
  );
}
