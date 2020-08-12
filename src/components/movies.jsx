import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import styles from './movies.module.css';

class Movies extends Component {
    state = { 
        movies: getMovies()
    };

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies: movies
        });
        console.log(movie);
    };

    render() { 
        return (  
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
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
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-secondary btn-sm">Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        );
    }
}
 
export default Movies;