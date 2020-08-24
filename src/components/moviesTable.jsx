import React, { Component } from 'react';
import Like from './common/like';
import styles from './movies.module.css';

class MoviesTable extends Component {
    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        }
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);   
    };

    render() { 
        const { movies, onDelete, onLike } = this.props;

        return (  
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col" onClick={() => this.raiseSort("title")}>Title</th>
                    <th scope="col" onClick={() => this.raiseSort("genre.name")}>Genre</th>
                    <th scope="col" onClick={() => this.raiseSort("numberInStock")}>Stock</th>
                    <th scope="col" onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
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
}
 
export default MoviesTable;