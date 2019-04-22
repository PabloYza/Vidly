import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
  return ( 
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input 
  /* This class will focus the input box when clicked */
        {...rest}
        autoFocus
        name={name}
        id={name} 
        className='form-control'
      />
      {error && <div className='alert alert-danger'>{error}</div>}
  {/* if error is truthy the expression will be returned // if falsy, it will be ignored */}
    </div>
  );
}
 
export default Input;