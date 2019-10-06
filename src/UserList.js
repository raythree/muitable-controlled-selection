import React, { useState, useEffect } from 'react';
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
    selection: true
  };

  function onChangeSelection(rows) {
    let newSelection = {};
    rows.forEach((row) => {
      if (row.tableData.checked) {
        newSelection[row.id] = true;
      }
    });
    props.onChangeSelection(newSelection);
  }

  function getTableData() {
    return props.data.map((row) => {
      return {...row, tableData: {checked: props.selection[row.id] ? true: false}};
    })
  }

  let [tableData, setTableData] = useState(getTableData());
  useEffect(() => {
    setTableData(getTableData());
  }, [props.selection, props.data]);

  return (    
    <MuiTable 
      title={title} 
      columns={columns} 
      data={tableData} 
      options={options}
      onSelectionChange={onChangeSelection}
    />
  );
}