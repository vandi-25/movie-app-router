import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import moviesData from './movies';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>My Favorite Movies</h1>
              <Filter
                title={titleFilter}
                rate={rateFilter}
                onTitleChange={setTitleFilter}
                onRateChange={setRateFilter}
              />
              <MovieList movies={filteredMovies} />
              <AddMovie onAdd={addMovie} />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
