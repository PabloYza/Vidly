import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import auth from '../services/authService';

class LoginForm extends Form {
  state = {
    data: {username: '', password: ''},
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  };  

  
  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      window.location = '/'; // This will result in a full reload of the app
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  }


  render() { 
    return ( 
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} >        
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
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
