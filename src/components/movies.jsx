import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import styles from './movies.module.css';
import Like from './common/like';
import Pagination from './common/pagination';

class Movies extends Component {
    state = { 
        movies: getMovies(),
        pageSize: 4
    };

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
        console.log(page);
    }

    render() { 
        const { length: count } = this.state.movies;

        if (count === 0) 
            return <p>There are no movies in the database.</p>;

        return (
            <React.Fragment>
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
                            this.state.movies.map(movie => {
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
                    pageSize={this.state.pageSize} 
                    onPageChange={this.handlePageChange}              
                />
            </React.Fragment>
        );
    }
}
 
export default Movies;