import React from 'react';
import Joi from 'joi-browser';
import Form from './form';
import * as userService from '../../services/userService'; // with * we import ALL FUNCTIONS as methods of the userService object

class RegisterForm extends Form {
  state = { 
    data: { username: '', password: '', name: ''},
    errors: {}
   };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label('Username'),
    password: Joi.string()
      .required()
      .min(5)
      .label('Password'),
    name: Joi.string()
      .required()
      .label('Name')
  };

  doSubmit = async () => {
    await userService.register(this.state.data);

  };

  render() { 
    return ( 
      <div>
        <h1>Register</h1>
        <form onSubmit={this.doSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'Password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
     );
  }
}
 
export default RegisterForm;