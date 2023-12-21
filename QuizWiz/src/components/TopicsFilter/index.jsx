const TopicsFilter = ({ textFilter, setTextFilter, onEnterPress }) => {
  const updateTextFilter = (e) => {
    setTextFilter(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onEnterPress();
    }
  };

  return (
    <div className='search-bar'>
      <label>
        <input
          type='text'
          value={textFilter}
          onChange={updateTextFilter}
          onKeyDown={handleKeyDown}
          placeholder='Search topic here...'
        />
      </label>
    </div>
  );
};

export default TopicsFilter;
