import { useState, useEffect } from 'react';
import {
  // useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import ItemPage from './ItemPage';

const SinglePage = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState('');

  // Use slug - first solve with useLocation
  const { state } = useLocation();
  const { id } = state;

  // Use slug - second solve with regular expression
  // When we use Slugify - for finding id - need to use regular expression
  // const {id} = useParams();
  // console.log(id.match(/[a-z0-9]+$/)[0]);
  // const pokemonId = id.match(/[a-z0-9]+$/)[0]

  const goBack = () => navigate(-1);
  const goBackTwoSteps = () => navigate(-2);
  const goHome = () => navigate('/', { replace: true });
  const goBackWithState = () => navigate('/posts', { state: 123 });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(r => r.json())
      .then(data => setPokemon(data));
  }, [id]);

  return (
    <div>
      <div className="buttons-block">
        <button onClick={goBack} className="button">
          Go back
        </button>
        <button onClick={goBackTwoSteps} className="button">
          Go back Two Steps
        </button>
        {/* Not Recommended! Bad approach. Better to use Link for simple go to home */}
        <button onClick={goHome} className="button">
          Go Home
        </button>
        <button onClick={goBackWithState} className="button">
          Go Back With State
        </button>
      </div>

      <div className="content-container">
        {pokemon && <ItemPage item={pokemon} />}
      </div>
    </div>
  );
};

export default SinglePage;
