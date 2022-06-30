import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Movie from './../models/Movie';

const Movies = () => {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        setInterval(() => {
            setMovies(
                [
                    { id: 1, title: 'The Shawshank Redemption', runtime: 142 },
                    { id: 2, title: 'The Godfather', runtime: 175 },
                    { id: 3, title: 'The Dark Knight', runtime: 153 }
                ]
            );
        }, 5000)
    })

    return (
        <Fragment>
            <h2>Choose a movie</h2>

            <ul>
                {movies.map(m => (
                    <li key={m.id}>
                        <Link to={`/movies/${m.id}`}>{m.title}</Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default Movies;