import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import SearchForm from './SearchForm';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  // console.log('location in posts ', location);

  const searchFromLocation = location.state ? location.state : '';
  // console.log(searchFromLocation);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(r => r.json())
      .then(data => setPosts(data.results));
  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {posts.map(post => {
          const arr = post.url.split('/');
          const id = arr[arr.length - 2];
          return (
            <Link key={post.name} to={`/posts/${id}`}>
              <li>{post.name}</li>
            </Link>
          );
        })}
      </ul>
      <div className="links-block">
        <Link to="/posts/new" style={{ color: 'darkgreen' }}>
          Create New Post
        </Link>
        <Link to="/find" style={{ color: 'darkviolet' }}>
          Find pokemon
        </Link>
        <Link to={`/find${searchFromLocation}`} style={{ color: 'darkred' }}>
          Go to previous search
        </Link>
      </div>
    </>
  );
}

export default BlogPage;
