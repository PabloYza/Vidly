/* Objects from 3rd party libraries */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
/* Components */
import Movies from './components/movies';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/common/registerForm';
import Logout from './components/logout';
import ProtectedRoute from './components/common/protectedRoute';
/* Services */
import auth from './services/authService';
/* CSS modules */
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  state = {  }
  
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  
  render() {
    const { user } = this.state;
    
    return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={user} />  
      <main className="container">
        <Switch>
          <Route path='/register' component={RegisterForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/logout' component={Logout} />
        {/* This is done in order to "protect" a route */}
          <ProtectedRoute path='/movies/:id' component={MovieForm} />
          <Route 
            path='/movies' 
            render={props => <Movies {...props} user={user}/>} 
          />
          <Route path='/customers' component={Customers} />>
          <Route path='/rentals' component={Rentals} />>
          <Route path='/not-found' component={NotFound} />
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