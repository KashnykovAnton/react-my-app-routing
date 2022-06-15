import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('pokemon') || '';
  const [query, setQuery] = useState(searchQuery);
  // console.log(useLocation());

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    onSubmit(query);
  }, []);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query.trim().toLowerCase());
    const params = {};
    console.log(query.trim() !== '');

    if (query.length && query.trim() !== '') {
      params.pokemon = query.trim().toLowerCase();
      console.log('inside');
      setSearchParams(params);
    }

    console.log(params);
    setSearchParams(params);
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
