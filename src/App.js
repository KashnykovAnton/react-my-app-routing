import { Routes, Route, Link } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import BlogPage from 'pages/BlogPage';
import NotFoundPage from 'pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/posts" element={<BlogPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
