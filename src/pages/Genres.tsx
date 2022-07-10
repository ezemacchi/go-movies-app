import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Genre from '../models/Genre';

const Genres = () => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        fetch("http://localhosts:4000/v1/categories")
            .then(response => {
                if (response.status !== 200) {
                    let err = "Invalid response code: " + response.status;
                    setError(err);
                }
                return response.json();
            })
            .then((json: Genre[]) => {
                setGenres(json);
                setIsLoaded(true);
            }, err => {
                setIsLoaded(true);
                setError(err);
            })
    }, []);

    if(!isLoaded) {
        return <p>Loading...</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <ul>
                {genres.map((g, index) => (
                    <li key={index}><Link to={`/genres/${g.id}`}>{g.genreName.charAt(0).toUpperCase() + g.genreName.slice(1)}</Link></li>
                ))}
            </ul>
        </div>
    );
}

export default Genres;