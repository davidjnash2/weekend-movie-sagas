import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
// import MovieListItem from '../MovieListItem/MovieListItem';

import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const clickPoster = () => {
        history.push('/details')
        dispatch({
            type: 'FETCH_DETAILS'
        });
    }

    return (

        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={clickPoster} movie={movie} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;