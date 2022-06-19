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
      <div>
        <button type="button" onClick={goBack} className="button">
          Go back
        </button>
      </div>
      <div className="content-container">
        <h2>{post.title}</h2>
        <p>Post number: {post.id}</p>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default BlogPostsSinglePage;
