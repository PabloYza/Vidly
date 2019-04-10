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

  renderSortIcon = column => {
    const { sortColumn } = this.props; 
    //Check if the column we get is different from the sortColumn()
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'ascending') return <i className='fas fa-sort-up'/>
    return <i className='fas fa-sort-down'/>;
  };

  render() { 
    return (
      <thead>
        <tr>
          { this.props.columns.map(column => (
            <th 
              className='clickable'
              key={column.path || column.key} 
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead> 
    );
   }
 }
  
 export default TableHeader;