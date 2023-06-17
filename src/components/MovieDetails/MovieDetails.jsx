import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';





function MovieDetails(movie) {
    console.log('movie is', movie);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({ type: '<<<_DETAILS>>>' });
    }, []);


    return (
        <main>
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title}/>
                <p>Genre:{movie.genres}</p>
                <p>{movie.description}</p>
            {/* <button onClick={goHome}>TAKE ME BACK TO THE LIST</button> */}
        </main>

    );
}

export default MovieDetails;