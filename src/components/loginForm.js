import React, { Component } from 'react';

class LoginForm extends Component {
  handleSubmit = e => {
    //prevent the FullPage Reload
    e.preventDefault();

    //call the server
    console.log('Submitted');
  }


  render() { 
    return ( 
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} >        
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' className='form-control'></input>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input id='password' type='text' className='form-control'></input>
          </div>
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
     );
  }
}
 
export default LoginForm;