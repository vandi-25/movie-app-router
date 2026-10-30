function Filter({ title, rate, onTitleChange, onRateChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <select value={rate} onChange={(e) => onRateChange(Number(e.target.value))}>
        <option value={0}>All ratings</option>
        <option value={1}>1 star and up</option>
        <option value={2}>2 stars and up</option>
        <option value={3}>3 stars and up</option>
        <option value={4}>4 stars and up</option>
        <option value={5}>5 stars only</option>
      </select>
    </div>
  );
}

export default Filter;
