import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import BlogPage from 'pages/BlogPage';
import BlogPostsPage from 'pages/BlogPostsPage';
import BlogPostsSinglePage from 'pages/BlogPostsSinglePage';
import NotFoundPage from 'pages/NotFoundPage';
import Layout from 'components/Layout';
import SinglePage from 'pages/SinglePage';
import CreatePost from 'pages/CreatePost';
import EditPost from 'pages/EditPost';
import SearchPage from 'pages/SearchPage';
import LoginPage from 'pages/LoginPage';
import RequireAuth from 'hoc/RequireAuth';
import { AuthProvider } from 'hoc/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />}>
            <Route
              path="contacts"
              element={<p className="about">Our Contacts</p>}
            />
            <Route path="team" element={<p className="about">Our Team</p>} />
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            }
          />
          <Route path="blog-posts" element={<BlogPostsPage />} />
          <Route path="blog-posts/:id" element={<BlogPostsSinglePage />} />
          <Route path="find" element={<SearchPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
