import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, CardContent, Typography, CardMedia, CardActionArea, CardActions, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    // added some card styleing to ensure cards blend in with background
    return (
        <>
            <div>
                <Card className="card"
                    style={{
                        backgroundColor:
                            'black'
                    }}
                    onClick={clickPoster}>
                    <CardMedia
                        component="img"
                        image={movie.poster}
                        alt={movie.title}
                        className="cardMedia"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {movie.title}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default MovieListItem;


