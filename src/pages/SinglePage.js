import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState('');
  console.log(pokemon);

  const goBack = () => navigate(-1);
  const goBackTwoSteps = () => navigate(-2);
  const goHome = () => navigate('/', { replace: true });
  const goBackWithState = () => navigate('/posts', { state: 123 });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(r => r.json())
      .then(data => setPokemon(data));
  }, [id]);

  const { sprites, name, stats } = pokemon;

  return (
    <div>
      <div className="buttons-block">
        <button onClick={goBack}>Go back</button>
        <button onClick={goBackTwoSteps}>Go back Two Steps</button>
        {/* Not Recommended! Bad approach. Better to use Link for simple go to home */}
        <button onClick={goHome}>Go Home</button>
        <button onClick={goBackWithState}>Go Back With State</button>
      </div>

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
