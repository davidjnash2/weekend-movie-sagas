import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
// import MovieForm from '../MovieForm/MovieForm';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      {/* route and component element for MovieList */}
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* route and component element for MovieDetails */}
        <Route path="/details" exact>
          <MovieDetails />
        </Route>

        {/* STRETCH route and component element for MovieForm */}
        {/* <Route path="/add" exact>
          <MovieForm />
        </Route> */}


      </Router>
    </div>
  );
}


export default App;
