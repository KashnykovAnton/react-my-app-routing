import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <NavLink to="/" className={'header-link'}>
          Home
        </NavLink>
        <NavLink to="/posts" className={'header-link'}>
          Blog
        </NavLink>
        <NavLink to="/blog-posts" className={'header-link'}>
          BlogPosts
        </NavLink>
        <NavLink to="/find" className={'header-link'}>
          Search
        </NavLink>
        <NavLink to="/about" className={'header-link'}>
          About
        </NavLink>
      </header>

      <div className="outlet">
        <Outlet />
      </div>

      <footer>2022</footer>
    </>
  );
}

export default Layout;
