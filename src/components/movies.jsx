import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import styles from './movies.module.css';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4
    };

    componentDidMount() {
        this.setState({
            movies: getMovies(),
            genres: getGenres()
        });
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies: movies
        });
        console.log(movie);
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({
            movies: movies
        });
    }

    handlePageChange = page => {
        this.setState({
            currentPage: page
        });
    }

    handleGenreSelect = genre => {
        this.setState({
            selectedGenre: genre
        });
    }

    render() { 
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        if (count === 0) return <p>There are no movies in the database.</p>;

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup 
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre} 
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {this.state.movies.length} movies in the database.</p>  
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map(movie => {
                                    return <tr key={movie._id} className={styles.Movies}>
                                        <th scope="row">{movie.title}</th>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td>
                                            <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
                                        </td>
                                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-secondary btn-sm">Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <Pagination 
                        itemsCount={count} 
                        pageSize={pageSize}
                        currentPage={currentPage} 
                        onPageChange={this.handlePageChange}              
                    />
                </div>
            </div>
        );
    }
}
 
export default Movies;