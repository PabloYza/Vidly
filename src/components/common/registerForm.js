import React from 'react';
import Joi from 'joi-browser';
import Form from './form';

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

  doSubmit = () => {
    //Call server
    console.log('Submitted')
  };

  render() { 
    return ( 
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('Username', 'Username')}
          {this.renderInput('Password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
     );
  }
}
 
export default RegisterForm;