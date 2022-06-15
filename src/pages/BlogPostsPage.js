import BlogPostsFilter from 'components/BlogPostsFilter';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// import SearchForm from './SearchForm';

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(r => r.json())
      .then(posts => setPosts(posts));
  }, []);

  return (
    <>
      <h1>Blog Posts page</h1>
      <BlogPostsFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <ul>
        {posts &&
          posts
            .filter(
              post => post.title.includes(postQuery) && post.id >= startsFrom,
            )
            .map((post, index) => {
              if (index >= 20) {
                // eslint-disable-next-line array-callback-return
                return;
              }
              return (
                <Link key={post.id} to={`/posts/${post.id}`}>
                  <li>
                    <span style={{ marginRight: '15px' }}>№ {post.id}</span>
                    <span>{post.title}</span>
                  </li>
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

export default BlogPostsPage;
