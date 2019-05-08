import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ columns, sortColumn, onSort, data }) => {
/* This destructuring is the same as passing the props as ARGS of the Table method   
  const { columns, sortColumn, onSort, data } = props;  */

  return ( 
    <table className='table'>
      <TableHeader 
        columns={columns} 
        sortColumn={sortColumn} 
        onSort={onSort} 
      />
      <TableBody 
        data={data}
        columns={columns}
      />
    </table>   
  );
};
 
export default Table;