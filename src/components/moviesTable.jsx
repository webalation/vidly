import React from 'react';
import Like from './common/like';
import styles from './movies.module.css';

const MoviesTable = props => {
    const { movies, onDelete, onLike, onSort } = props;

    return (  
        <table className="table">
            <thead>
                <tr>
                <th scope="col" onClick={() => onSort("title")}>Title</th>
                <th scope="col" onClick={() => onSort("genre.name")}>Genre</th>
                <th scope="col" onClick={() => onSort("numberInStock")}>Stock</th>
                <th scope="col" onClick={() => onSort("dailyRentalRate")}>Rate</th>
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
                                <Like 
                                    liked={movie.liked} 
                                    onClick={() => onLike(movie)} 
                                />
                            </td>
                            <td>
                                <button 
                                    onClick={() => onDelete(movie)} 
                                    className="btn btn-secondary btn-sm"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    );
}
 
export default MoviesTable;