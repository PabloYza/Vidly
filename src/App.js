/* Objects from 3rd party libraries */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
/* Components */
import Movies from './components/movies';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/common/registerForm';
/* CSS modules */
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  state = {  }
  
  componentDidMount() {
    try {
      const jwt = localStorage.getItem('token');
      const user = jwtDecode(jwt);
      this.setState({ user });
    }
    catch (ex) {}
  }
  
  render() { 
    return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={this.state.user} />  
      <main className="container">
        <Switch>
          <Route path='/register' component={RegisterForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/movies/:id' component={MovieForm} />
          <Route path='/movies' component={Movies} ></Route>
          <Route path='/customers' component={Customers} ></Route>
          <Route path='/rentals' component={Rentals} ></Route>
          <Route path='/not-found' component={NotFound} ></Route>
          <Redirect from='/' exact to='/movies' />
    {/* This Redirect will show the 'NOTFOUND' page when we type a route !== one of the above */}
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>  
    );
  }
}
 
export default App;