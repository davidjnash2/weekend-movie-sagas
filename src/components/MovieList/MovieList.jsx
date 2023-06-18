import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieListItem from '../MovieListItem/MovieListItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MovieList() {

  // bringing movies array data from global state
  const movies = useSelector(store => store.movies);

  // bringing distpatch to allow sending actions
  const dispatch = useDispatch();

  // dispatching action to get all movies and render on load
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);


  // settings for slider
  const settings = {
    className: "center",
    infinite: true,
    center: true,
    centerPadding: "200px",
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    // render data, passing item id as key, and importing MovieListItem;
    // wrapping MovieListItem in Slider, so that the cards coming from 
    // that element are able to be carouseled
    <main>
      <h1>MovieList</h1>
      <div className="movies" id="slider-container">
        <Slider {...settings}>
          {movies.map(movie => (
            <div key={movie.id}>
              <MovieListItem movie={movie} />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}


export default MovieList;