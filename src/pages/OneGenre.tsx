import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Genre from "../models/Genre";

const OneGenre = () => {

    const [genre, setGenre] = useState<Genre>();
    const [error, setError] = useState<string>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    let params = useParams();
    let id = params.id;

    useEffect(() => {
        fetch(`http://localhost:400/v1/genres/${id}`)
            .then(async response => {
                if (!response.ok) {
                    let err = "Invalid response code: " + response.status;
                    setError(err);
                }
                setGenre(await response.json());
                setIsLoaded(true);
                return response.json();
            })
            .then((json: Genre) => {

            }, error => {
                setIsLoaded(true);
                setError(error);
            })
    }, []);

    return (
        !isLoaded ?
            <p>Loading...</p>
            : error ?
                <p>Error: {error}</p>
                : <h2>Genre: {genre!.genreName.charAt(0).toUpperCase() + genre!.genreName.slice(1)}</h2>
    );
}

export default OneGenre;