import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';
import styles from './movies.module.css';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like' },
        { key: 'delete' }
    ];

    render() { 
        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

        return (  
            <table className="table">
                <TableHeader 
                    columns={this.columns} 
                    sortColumn={sortColumn} 
                    onSort={onSort} 
                />
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