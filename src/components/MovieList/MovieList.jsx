import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieListItem from '../MovieListItem/MovieListItem';

function MovieList() {

    // bringing movies array data from global state
    const movies = useSelector(store => store.movies);

    // bringing distpatch to allow sending actions
    const dispatch = useDispatch();
    
    // dispatching action to get all movies and render on load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        // render data, passing item id as key, and importing MovieListItem
            <main>
              <h1>MovieList</h1>
              <section className="movies">
                {movies.map(movie => (
                  <div key={movie.id}>
                    <MovieListItem movie={movie} />
                  </div>
                ))}
              </section>
            </main>
    );
}

export default MovieList;