function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="rating">Rating: {'⭐'.repeat(rating)} ({rating}/5)</p>
    </div>
  );
}

export default MovieCard;
