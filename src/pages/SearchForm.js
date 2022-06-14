import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  console.log(useLocation());

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
