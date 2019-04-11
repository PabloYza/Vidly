import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from './components/movies';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NavBar from './components/navBar';


/* import Like from './components/common/like'; */

class App extends Component {
  state = {  }
  render() { 
    return (
    <React.Fragment>
      <NavBar />  
      <main className="container">
        <Switch>
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