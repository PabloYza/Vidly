import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import Pagination from '../components/common/pagination';
import { paginate } from '../utils/paginate';
import { getGenres,  }  from '../services/fakeGenreService';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
  state = { 
    movies: [],
    currentPage: 1,
    pageSize: 4,
    genres: [],
    sortColumn: { path: 'title', order: 'ascending'}
  };

  //This method will be called when an instance of this component is rendered in the DOM
  componentDidMount() {
    const genres = [{_id: '', name: 'All genres'},...getGenres()]

    this.setState({ movies: getMovies(), genres});
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { 
      pageSize, 
      currentPage, 
      movies: allMovies,  
      selectedGenre, 
      sortColumn 
    } = this.state;
  //if selectedGenre & selectedGenre._id are truthy, we get all movies and filter them -> the genre of each movie is = to the selected genre OTHERWISE return allMovies
    const filtered = 
      selectedGenre && selectedGenre._id
        ? allMovies.filter(movies => movies.genre._id === selectedGenre._id) 
        : allMovies
  
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
      
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies};
  };

  render() { 
    const { length: count } = this.state.movies;
    const { 
      pageSize, 
      currentPage, 
      sortColumn,
      genres,
      selectedGenre 
    } = this.state;

    if (count === 0) return <p>No movies on the DB</p>;

    const {totalCount, data: movies} = this.getPagedData();
    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup 
            items={genres}
            selectedItem={selectedGenre} 
            onItemSelect={this.handleGenreSelect}
            /* we pass these 2 props so we can work with any kind of objects - set default props in the component 
            textProperty='name'
            valueProperty='_id' */
          />
        </div>
        <div className='col'>
          <p>Showing {totalCount} movies in the DB</p>
          <MoviesTable 
            movies={movies} 
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}   
          />
          <Pagination 
            itemsCount={totalCount} 
            pageSize={pageSize} 
            onPageChange={this.handlePageChange} 
            currentPage={currentPage}
          />
        </div>          
      </div>
    )
  }
}
 
export default Movies;