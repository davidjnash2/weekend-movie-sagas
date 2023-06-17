import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function MovieListItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();
    

    const clickPoster = () => {
        history.push('/details')
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movie.id
        })
    }

    return (
        <>
            <h3>{movie.title}</h3>
            <img onClick={clickPoster} src={movie.poster} alt={movie.title} />
        </>
    )
}

export default MovieListItem;