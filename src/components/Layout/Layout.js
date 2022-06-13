import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Outlet />
      <footer>2022</footer>
    </>
  );
}

export default Layout;
