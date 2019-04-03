import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = { 
    movies: getMovies()
   };

   handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
   };

   handleReset = (movie) => {
     
   }

  render() { 
    const { length: count } = this.state.movies;

    if (count === 0) return <p>No movies on the DB</p>;

    return (
      <React.Fragment>
        <p>Showing {count} movies in the DB</p>
        <table className="table">
          <thead>{/* <button onClick={() this.handleReset(movie) className="btn btn-primary btn-sm" type="reset" value="Reset"}></button> */}
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.state.movies.map(movie =>(
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
              ))}
          </tbody>
        </table>        
      </React.Fragment>
    )
  }
}
 
export default Movies;