import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Blog</NavLink>
        <NavLink to="/blog-posts">BlogPosts</NavLink>
        <NavLink to="/find">Search</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>

      <Outlet />

      <footer>2022</footer>
    </>
  );
}

export default Layout;
