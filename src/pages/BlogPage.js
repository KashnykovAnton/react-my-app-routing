import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import SearchForm from './SearchForm';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  console.log(useLocation());

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(r => r.json())
      .then(data => setPosts(data.results));
    // fetch('https://jsonplaceholder.typicode.com/posts/')
    //   .then(r => r.json())
    //   .then(data => {
    //     console.log(data);
    //   });
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
      <Link to="/posts/new" style={{ color: 'darkgreen' }}>
        Create New Post
      </Link>
    </>
  );
}

export default BlogPage;
