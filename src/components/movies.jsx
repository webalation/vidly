import React, { PureComponent } from 'react';
import { getMovies } from '../services/fakeMovieService';
import styles from './movies.module.css';

class Movies extends PureComponent {
    state = { 
        movies: getMovies()
    };

    handleDelete = movie => {
        const movies = [...this.state.movies]
        movies.splice(movie, 1);
        this.setState({
            movies: movies
        });
    };

    render() { 
        return (  
            <main role="main" className="container">
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
                                <td><button onClick={this.handleDelete} className="btn btn-secondary btn-sm">Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
                </table>
            </main>
        );
    }
}
 
export default Movies;