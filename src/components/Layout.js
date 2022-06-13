import { NavLink, Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const setActive = ({ isActive }) => (isActive ? 'active-link' : '');
const setActiveStyle = ({ isActive }) => ({
  color: isActive ? 'green' : 'blueviolet',
});

function Layout() {
  return (
    <>
      <header>
        <h1>Layout with className "active"</h1>
        {/* <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link> */}
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </header>
      <header>
        <h1>Layout with my own className "active-link"</h1>
        <div>
          <NavLink to="/" className={setActive}>
            {/* <NavLink to="/" style={setActiveStyle}> */}
            Home
          </NavLink>
          <NavLink to="/posts" className={setActive}>
            {/* <NavLink to="/posts" style={setActiveStyle}> */}
            Blog
          </NavLink>
          <NavLink to="/about" className={setActive}>
            {/* <NavLink to="/about" style={setActiveStyle}> */}
            About
          </NavLink>
        </div>
      </header>
      <header>
        <h1>Layout with inline-style</h1>
        <div>
          <NavLink to="/" style={setActiveStyle}>
            Home
          </NavLink>
          <NavLink to="/posts" style={setActiveStyle}>
            Blog
          </NavLink>
          <NavLink to="/about" style={setActiveStyle}>
            About
          </NavLink>
        </div>
      </header>
      <header>
        <h1>Layout with component "CustomLink"</h1>
        <div>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/posts">Blog</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </div>
      </header>
      <Outlet />
      <footer>2022</footer>
    </>
  );
}

export default Layout;
