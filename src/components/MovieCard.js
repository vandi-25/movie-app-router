import { Link } from 'react-router-dom';

function MovieCard({ id, title, description, posterURL, rating }) {
  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <img
        src={posterURL}
        alt={title}
        onError={(e) => {
          // If the poster file is missing, show the default image instead
          e.target.src = '/posters/default.svg';
        }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="rating">Rating: {'⭐'.repeat(rating)} ({rating}/5)</p>
    </Link>
  );
}

export default MovieCard;
