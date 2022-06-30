import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Movie from '../models/Movie';

const OneMovie = () => {

    const [movie, setMovie] = useState<Movie>({ id: 0, title: '', runtime: 0 });

    let params = useParams();

    useEffect(() => {
        setInterval(() => {
            setMovie(
                { id: Number(params.id), title: "Some Movie", runtime: 150 }
            )
        }, 1500)
    })


    return (
        <Fragment>
            <h2>Movie: {movie.title}</h2>

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