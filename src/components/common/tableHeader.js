import React, { Component } from 'react';

/* columns: Array
sortColumn: object
onSort: function */

 class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = {...this.props.sortColumn};
    if (sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'ascending') ? 'desc' : 'ascending';
    else {
      sortColumn.path = path;
      sortColumn.order = 'ascending';
    }
    this.props.onSort(sortColumn);
  };


  render() { 
    return (
      <thead>
        <tr>
          { this.props.columns.map(column => (
            <th key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>{ column.label }</th>
          ))}
        </tr>
      </thead> 
    );
   }
 }
  
 export default TableHeader;