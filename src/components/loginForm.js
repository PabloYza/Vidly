import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: {username: '', password: ''}
  }

  handleSubmit = e => {
    //prevent the FullPage Reload
    e.preventDefault();

    //call the server
    console.log('Submitted');
  };

  handleChange = ({currentTarget: input}) => {
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() { 
    const { account } = this.state;

    return ( 
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} >        
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input 
              autoFocus
              onChange={this.handleChange}
              value={account.username}
              name='username' 
              id='username'
              type='text' 
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input 
            /* This class will focus the input box when clicked */
              autoFocus
              onChange={this.handleChange}
              value={account.password}
              name='password'
              id='password' 
              type='text' 
              className='form-control'
            />
          </div>
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
     );
  }
}
 
export default LoginForm;

/* If we want to access a DOM Element (username - in this case) we need to give it a refence
username = React.createRef(); 
To store it -  const Username = this.username.current.(attribute we want to access)
*/
