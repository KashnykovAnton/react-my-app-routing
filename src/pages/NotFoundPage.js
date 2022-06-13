import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h2>Unfortunately this page diesn't exist! </h2>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </>
  );
}

export default NotFoundPage;
