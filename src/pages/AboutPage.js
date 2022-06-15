// import { Route, Routes, Link } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';

function AboutPage() {
  return (
    <>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, et?</p>
      <div className="links-block">
        <Link to="contacts">Contacts</Link>
        <Link to="team">Team</Link>
      </div>
      {/* We can put this routes inside main rout About - in App.js */}
      {/* <Routes>
        <Route path="contacts" element={<p>Our Contacts</p>} />
        <Route path="team" element={<p>Our Team</p>} />
      </Routes> */}
      <Outlet />
    </>
  );
}

export default AboutPage;
