import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// adding theme to set default style to black
const allBlack = createTheme({
    palette: {
        background: {
            default: 'black',
        },
    },
});


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    // put/dispatch to movies reducer to hold all in state
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    };
}

function* fetchDetails(action) {
    // get details for specified movie
    // put/dispatch to set retrieved data to details 
    // reducer to hold data in state
    try {
        console.log('fetchDetails dinged with this id', action.payload);
        const details = yield axios.get(`/api/movie/${action.payload}`);
        console.log('get details:', details.data);
        yield put({ type: 'SET_DETAILS', payload: details.data });
    } catch {
        console.log('error in fetchDetails get');
    };
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    };
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    };
}


// details reducer to hold specific movie info in state
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    };
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);


// adding ThemeProvide wrap on full render here to get all views to carry black theme
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={allBlack}> 
            <Provider store={storeInstance}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
