import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'hook/useAuth';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
