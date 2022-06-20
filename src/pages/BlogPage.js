import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import slugify from 'slugify';
// import SearchForm from './SearchForm';

function BlogPage() {
  const [count, setCount] = useState(9);
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  // console.log('location in Blog Page ', location);

  const searchFromLocation = location.state ? location.state : '';
  // console.log(searchFromLocation);

  useEffect(() => {
    console.log('inside useEffect');
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(r => r.json())
      .then(data => setPosts(data.results));
  }, [count]);

  const handleClick = () => {
    setCount(prevState => prevState + 10);
  };

  return (
    <>
      <h1>Blog page</h1>
      <dir className="content-container blog-container">
        <ul className="list">
          {posts
            .filter((post, index) => index <= count)
            .map(post => {
              console.log('inside map');
              const arr = post.url.split('/');
              const id = arr[arr.length - 2];
              // location.state = id;
              // console.log('location in BlogPage: ', location);

              return (
                <Link
                  key={post.name}
                  // Old example without Slugify
                  // to={`/posts/${id}`}

                  // New example WITH Slugify
                  to={`/posts/${slugify(`${post.name} ${id}`, {
                    lower: true,
                  })}`}
                  // need to pass id separately, because useParams in the SinglePage haven't worked alredy
                  state={{ id: id }}
                  className={'list-link'}
                >
                  <li className="list-name">{post.name}</li>
                  <span className="flare"></span>
                </Link>
              );
            })}
          <button type="button" className="button" onClick={handleClick}>
            LoadMore
          </button>
        </ul>
      </dir>
      <div className="links-block">
        <Link to="/posts/new">Create New Post</Link>
        <Link to="/find">Find pokemon</Link>
        <Link to={`/find${searchFromLocation}`}>Go to previous search</Link>
      </div>
    </>
  );
}

export default BlogPage;
