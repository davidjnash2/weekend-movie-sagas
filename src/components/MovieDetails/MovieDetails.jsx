import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';





function MovieDetails() {
    const details = useSelector(store => store.details);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS' });
        // make get for specific movie details
    }, []);


    return (
        <div>
            <h1>{details.title}</h1>
            <img src={details.poster} alt={details.title} />
            <p>Genre:{details.genres}</p>
            <p>Description:{details.description}</p>
            <button onClick={() => history.push('/')}>TAKE ME BACK TO THE LIST</button>
        </div>

    );
}

export default MovieDetails;