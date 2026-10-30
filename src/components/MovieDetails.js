import { useParams, Link } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div>
        <h2>Movie not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="movie-details">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      {movie.trailer ? (
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title={`${movie.title} trailer`}
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available.</p>
      )}
    </div>
  );
}

export default MovieDetails;
