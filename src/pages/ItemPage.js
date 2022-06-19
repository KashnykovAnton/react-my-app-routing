import { Link } from 'react-router-dom';

function ItemPage({ item }) {
  const { sprites, name, stats, id } = item;
  return (
    <div className="search-result">
      <div>
        <img
          src={sprites.other['official-artwork'].front_default}
          width="240"
          alt={name}
        />
      </div>
      <div>
        <h2>
          {name} / id:{id}
        </h2>
        <ul>
          {stats.map(entry => (
            <li key={entry.stat.name}>
              {entry.stat.name}: {entry.base_stat}
            </li>
          ))}
        </ul>
        <div className="links-block link-edit">
          <Link to={`/posts/${id}/edit`}>Edit Pokemon</Link>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
