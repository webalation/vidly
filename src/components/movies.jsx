import React, { PureComponent } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends PureComponent {
    state = { 
        movies: getMovies()
    };

    handleDelete = movie => {
        
    };

    render() { 
        return (  
            <main role="main" className="container">
                <table class="table">
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
                            return <tr>
                                <th scope="row">{movie.title}</th>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button className="btn btn-secondary btn-sm">Delete</button></td>
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