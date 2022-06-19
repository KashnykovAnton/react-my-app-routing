import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from './SearchForm';
import ItemPage from './ItemPage';

function SearchPage() {
  const [pokemon, setPokemon] = useState({});
  const [query, setQuery] = useState('');
  const locationState = useLocation();
  console.log(locationState);
  console.log(query);
  // console.log(pokemon);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(r => r.json())
      .then(data => {
        setPokemon(data);
        locationState.state = query;
      })
      .catch(error => {
        console.log(error);
        setPokemon({});
        return alert('Please enter the correct search!');
      });
  }, [locationState, query]);

  const onChangeQuery = query => {
    if (!query) {
      setPokemon({});
    }
    setQuery(query);
  };

  const isEmpty = Object.keys(pokemon).length === 0;

  return (
    <>
      <h1>Search page</h1>
      <SearchForm onSubmit={onChangeQuery} />

      <div className="content-container">
        {!isEmpty && <ItemPage item={pokemon} />}
      </div>
    </>
  );
}

export default SearchPage;
