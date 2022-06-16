import { useAuth } from 'hook/useAuth';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(() => navigate('/', { replace: true }));
  };

  return (
    <>
      <h1>Create Post</h1>
      <button onClick={handleLogOut} className="button">
        Log Out
      </button>
    </>
  );
};

export default CreatePost;
