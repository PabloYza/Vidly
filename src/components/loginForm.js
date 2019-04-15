import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';

class LoginForm extends Component {
  state = {
    account: {username: '', password: ''},
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

  validate = () => {
    const options = { abortEarly: false };
// 1st arg Object we want to validate, 2nd schema 
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
// How to map an Array into an Object
    for (let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;

/* this method will return all the KEYS of this object in an array - Object.keys(targetObject)
    return Object.keys(errors).length === 0 ? null : errors; */
  };


  validateProperty = ({ name, value }) => {
// Whatever NAME is at runtime will be used to validate the KEY
    const obj = { [name]: value };
    const schema = {[name]: this.schema[name]};
    const {error} = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };


  handleSubmit = e => {
    //prevent the FullPage Reload
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    //call the server
    console.log('Submitted');
  };


  handleChange = ({currentTarget: input}) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() { 
    const { account, errors } = this.state;

    return ( 
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} >        
          <Input 
            name='username'
            value={account.username}
            label='Username'
            onChange={this.handleChange}
            error={errors.username}
            
          />
          <Input 
            name='password'
            value={account.password}
            label='Password'
            onChange={this.handleChange}
            error={errors.password}
          />
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
