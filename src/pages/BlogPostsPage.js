import BlogPostsFilter from 'components/BlogPostsFilter';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 90 : 1;

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
      <div className="content-container posts-container">
        <ul className="posts-list">
          {posts &&
            posts
              .filter(
                post => post.title.includes(postQuery) && post.id >= startsFrom,
              )
              .map((post, index) => {
                if (index >= 10) {
                  // eslint-disable-next-line array-callback-return
                  return;
                }
                return (
                  <Link key={post.id} to={`/blog-posts/${post.id}`}>
                    <li className="posts-item">
                      <span style={{ marginRight: '15px', width: '10%' }}>
                        № {post.id}
                      </span>
                      <span>{post.title}</span>
                    </li>
                  </Link>
                );
              })}
        </ul>
      </div>
      <div className="links-block">
        <Link to="/posts/new">Create New Post</Link>
      </div>
    </>
  );
}

export default BlogPostsPage;
