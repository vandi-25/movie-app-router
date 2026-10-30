import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
