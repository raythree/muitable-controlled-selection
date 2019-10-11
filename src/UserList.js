import React, { useMemo, useCallback } from 'react';
import MuiTable from 'material-table';

const title= "Controlled Selection";

const columns=[
  { title: 'First', field: 'first' },
  { title: 'Last', field: 'last' }
];

export default ({data, selection, onChangeSelection, selectOnRowClick = false}) => {
  const options = useMemo(() => ({
    search: false,
    paging: false,
    selection: true,
    selectionProps: row => {
      const opt = {
        checked:  selection[row.id] ? true : false
      };
      return opt;
    }  
  }), [selection]);
  
  const selectionChange = useCallback((rows) => {
      let newSelection = {};
      rows.forEach((row) => {
        if (row.tableData.checked) {
          newSelection[row.id] = true;
        }
      });
      onChangeSelection(newSelection);  
  }, [onChangeSelection]);
  
  const onRowClick = useCallback((event, row) => {
    if (selectOnRowClick) {
      console.log(event, row);
      onChangeSelection({...selection, [row.id]: !selection[row.id]});  
    }
  });

  return (    
    <MuiTable 
      title={title} 
      columns={columns} 
      data={data} 
      onRowClick={onRowClick}
      options={options}
      onSelectionChange={selectionChange}
    />
  );
}