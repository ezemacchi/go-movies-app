import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Movie from '../models/Movie';

interface MoviesResponse {
    movies: Movie[];
}

class MessageError {
    message: string | undefined;
}

const Movies = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<MessageError>();

    useEffect(() => {
        fetch("http://localhost:4000/v1/movies")
            .then(response => {
                if (response.status !== 200) {
                    let err = new MessageError();
                    err.message = "Invales response code : " + response.status;
                    setError(err);
                }
                return response.json()
            })
            .then((json: MoviesResponse) => {
                setMovies(json.movies);
                setIsLoaded(true);
            }, err => {
                setIsLoaded(true);
                setError(err);
            })
    }, [])

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <>
            <h2>Choose a movie</h2>
            <ul>
                {movies.map(m => (
                    <li key={m.id}>
                        <Link to={`/movies/${m.id}`}>{m.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Movies;