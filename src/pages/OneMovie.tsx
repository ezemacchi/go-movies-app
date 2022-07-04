import { parse } from 'path';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Movie from '../models/Movie';
import Movies from './Movies';

class MessageError {
    message: string | undefined;
}

interface OneMovieResponse {
    movie: Movie;
}

interface RouteParams {
    id: number
}

const OneMovie = () => {

    
    const params = useParams();
    const id = params.id || "";

    const [movie, setMovie] = useState<Movie>({ id: parseInt(id), title: '', runtime: 0, mpaaRating: '', genres: [] });
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<MessageError>();

    useEffect(() => {
        fetch(`http://localhost:4000/v1/movie/${id}`)
            .then(response => {
                if (response.status !== 200) {
                    let err = new MessageError();
                    err.message = "Invalid response code: " + response.status;
                    setError(err);
                }
                return response.json()
            })
            .then((json: OneMovieResponse) => {
                setMovie(json.movie);
                setIsLoaded(true);
            }, err => {
                setIsLoaded(true);
                setError(err);
            });
    }, []);

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    console.log(movie.genres);
    movie.genres = Object.values(movie.genres);
    console.log(movie.genres);

    return (
        <Fragment>
            <h2>Movie: {movie.title}</h2>

            <div className='float-start'>
                <small>Rating: {movie.mpaaRating}</small>
            </div>

            <div className="float-end">
                {movie.genres.map((m, index) => (
                    <span className='badge bg-secondary me-1' key={index}>
                        {m}
                    </span>
                ))}
            </div>

            <div className="clearfix"></div>
            <hr />

            <table className='table table-compact table-striped'>
                <thead></thead>
                <tbody>
                    <tr>
                        <td><strong>Title: </strong></td>
                        <td>{movie.title}</td>
                    </tr>
                    <tr>
                        <td><strong>Run time:</strong></td>
                        <td>{movie.runtime} minutes</td>
                    </tr>
                </tbody>

            </table>
        </Fragment>
    );
}

export default OneMovie;