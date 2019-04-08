import React, { Component } from 'react';
import Movies from './components/movies';
/* import Like from './components/common/like'; */

class App extends Component {
  state = {  }
  render() { 
    return (  
      <main className="container">
        <Movies />
      </main>
    );
  }
}
 
export default App;