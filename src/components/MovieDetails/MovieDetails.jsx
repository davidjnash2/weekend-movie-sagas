import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieDetails.css';
import { Grid, Button } from '@mui/material';

function MovieDetails() {

    // bring in specific movie item details from global state
    const details = useSelector(store => store.details);

    // bring in history to allow redirecting view
    const history = useHistory();

    // since haven't yet figured out how to keep data on page after 
    // refresh, adding this conditional render so that code doesn't 
    // break, which will allow user to click button to 
    // return to home page to make another selection
    if (details.length === 0) {
        return <div>
            OOOOOPS...nothing here.
            <br />
            <br />
            <br />
            <Button onClick={() => history.push('/')}>TAKE ME BACK TO THE LIST</Button>
        </div>;
    }

    // rendering returned movie detail data, using conditional rendering to
    // determine genre/genres heading
    return (
        <div className="details-container">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1>{details[0].title}</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={details[0].poster} alt={details[0].title} />
                </Grid>
                <Grid item xs={12} md={6}>
                    {details[0].json_agg.length > 1 ?
                        <h3>Genres:</h3> : <h3>Genre:</h3>}
                    <p>{details[0].json_agg.join(', ')}</p>
                    <h3>Description:</h3>
                    <p>{details[0].description}</p>
                    <p></p>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        xs={2}
                        onClick={() => history.push('/')}
                    >Pick another movie!
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default MovieDetails;