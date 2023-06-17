import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// bringing in movie as prop from MovieList
function MovieListItem({ movie }) {

    // bringing in history and dispatch so I can use 'em
    const history = useHistory();
    const dispatch = useDispatch();

    // function to handle click on poster, and route to details view, and 
    // dispatching action to saga w/ movie it, to trigger server GET with
    // specific movie data
    const clickPoster = () => {
        history.push('/details')
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movie.id
        })
        console.log('clicked movie.id is', movie.id);
    }

    // render each item from MovieList map, and assign click function to img tag
    return (
        <>
            <h3>{movie.title}</h3>
            <img onClick={clickPoster} src={movie.poster} alt={movie.title} />
        </>
    )
}

export default MovieListItem;