import { useState } from 'react';

function AddMovie({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      return;
    }

    onAdd({
      id: Date.now(),
      title: title,
      description: description,
      posterURL: posterURL || '/posters/default.svg',
      rating: rating,
    });

    // Clear the form
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(1);
  };

  return (
    <form className="add-movie" onSubmit={handleSubmit}>
      <h2>Add a Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL (optional)"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        <option value={1}>1 star</option>
        <option value={2}>2 stars</option>
        <option value={3}>3 stars</option>
        <option value={4}>4 stars</option>
        <option value={5}>5 stars</option>
      </select>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
