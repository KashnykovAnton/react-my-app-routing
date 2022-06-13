import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SinglePage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState('');
  console.log(pokemon);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(r => r.json())
      .then(data => setPokemon(data));
  }, [id]);

  const { sprites, name, stats } = pokemon;

  return (
    <div>
      {pokemon && (
        <>
          <img
            src={sprites.other['official-artwork'].front_default}
            width="240"
            alt={name}
          />
          <h2>{pokemon.name}</h2>
          <ul>
            {stats.map(entry => (
              <li key={entry.stat.name}>
                {entry.stat.name}: {entry.base_stat}
              </li>
            ))}
          </ul>
          <Link to={`/posts/${id}/edit`}>Edit Pokemon</Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;
