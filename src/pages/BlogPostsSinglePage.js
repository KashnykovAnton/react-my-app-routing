import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogPostsSinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(r => r.json())
      .then(data => setPost(data));
  }, [id]);

  return (
    <>
      <div className="buttons-block">
        <button type="button" onClick={goBack}>
          Go back
        </button>
      </div>
      <div className="post-article">
        <h2>{post.title}</h2>
        <p>Post number: {post.id}</p>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default BlogPostsSinglePage;
