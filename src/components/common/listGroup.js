import React from 'react';


const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) => {
/* This destructuring is the same as passing the props as ARGS of the ListGroup method
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props; */


  return ( 
    <ul className="list-group">
      {items.map(item => (
        <li 
          onClick={() => onItemSelect(item)} 
          key={item[valueProperty]} 
          className={item === selectedItem ? 'list-group-item active' : 'list-group-item'} 
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;