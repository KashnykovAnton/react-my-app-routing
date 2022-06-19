import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('pokemon') || '';
  const [query, setQuery] = useState(searchQuery);
  const navigate = useNavigate();
  const location = useLocation();

  // console.log('navigate ', navigate);
  // console.log('location in search ', location);

  const goBackToPosts = () => navigate('/posts', { replace: true });
  const goBackWithState = () => navigate('/posts', { state: location.search });

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    onSubmit(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formQuery = query.trim().toLowerCase();
    onSubmit(formQuery);
    const params = {};

    if (formQuery.length) {
      params.pokemon = formQuery;
      setSearchParams(params);
    }

    setSearchParams(params);
    setQuery('');
  };

  return (
    <>
      <div className="buttons-block">
        <button onClick={goBackToPosts} className="button">
          Go back To Posts
        </button>
        <button onClick={goBackWithState} className="button">
          Go Back With State
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
