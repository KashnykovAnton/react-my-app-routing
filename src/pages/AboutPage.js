// import { Route, Routes, Link } from 'react-router-dom';
import { Outlet, Link, useLocation } from 'react-router-dom';

function AboutPage() {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <>
      <h1>About page</h1>
      <div className="content-container">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque illo
          ullam perferendis aliquid ipsum dolorem, aliquam itaque doloribus aut
          repellendus reprehenderit sint a nihil doloremque molestiae rem facere
          rerum autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Atque illo ullam perferendis aliquid ipsum dolorem, aliquam itaque
          doloribus aut repellendus reprehenderit sint a nihil doloremque
          molestiae rem facere rerum autem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Atque illo ullam perferendis aliquid
          ipsum dolorem, aliquam itaque doloribus aut repellendus reprehenderit
          sint a nihil doloremque molestiae rem facere rerum autem.
        </p>
      </div>

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
