import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from './SearchForm';

function SearchPage() {
  const [pokemon, setPokemon] = useState({});
  const [query, setQuery] = useState('');
  const locationState = useLocation();
  console.log(useLocation());
  console.log(query);
  console.log(pokemon);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(r => r.json())
      .then(data => {
        setPokemon(data);
        locationState.state = query;
      });
  }, [locationState, query]);

  const onChangeQuery = query => {
    setQuery(query);
  };

  const isEmpty = Object.keys(pokemon).length === 0;

  return (
    <>
      <h1>Search page</h1>
      <SearchForm onSubmit={onChangeQuery} />
      <ul>
        {!isEmpty && (
          <>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              width="240"
              alt={pokemon.name}
            />
            <h2>{pokemon.name}</h2>
            <ul>
              {pokemon.stats.map(entry => (
                <li key={entry.stat.name}>
                  {entry.stat.name}: {entry.base_stat}
                </li>
              ))}
            </ul>
          </>
        )}
      </ul>
    </>
  );
}

export default SearchPage;
