import React from 'react';
import MuiTable from 'material-table';

export default (props) => {
  const title="Controlled Selection"
  const columns=[
    { title: 'First', field: 'first' },
    { title: 'Last', field: 'last' }
  ];
  const options = {
    search: false,
    paging: false,
    selection: true,
    selectionProps: row => {
      return {
        checked: props.selection[row.id] ? true : row.tableData.checked
      };
    }
  };

  function onChangeSelection(rows) {
    console.log(rows);
    let newSelection = {};
    rows.forEach((row) => {
      if (row.tableData.checked) {
        newSelection[row.id] = true;
      }
    });
    props.onChangeSelection(newSelection);
  }

  const tableData = props.data.map((item) => {
    return {...item, tableData: {checked: props.selection[item.id] ? true: false}};
  });

  return (    
    <MuiTable 
      title={title} 
      columns={columns} 
      data={props.data} 
      options={options}
      onSelectionChange={onChangeSelection}
    />
  );
}