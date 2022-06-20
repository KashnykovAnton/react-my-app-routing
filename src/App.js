import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout';
import RequireAuth from 'hoc/RequireAuth';
import { AuthProvider } from 'hoc/AuthProvider';
// import HomePage from 'pages/HomePage';
// import AboutPage from 'pages/AboutPage';
// import BlogPage from 'pages/BlogPage';
// import BlogPostsPage from 'pages/BlogPostsPage';
// import BlogPostsSinglePage from 'pages/BlogPostsSinglePage';
// import NotFoundPage from 'pages/NotFoundPage';
// import SinglePage from 'pages/SinglePage';
// import CreatePost from 'pages/CreatePost';
// import EditPost from 'pages/EditPost';
// import SearchPage from 'pages/SearchPage';
// import LoginPage from 'pages/LoginPage';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */),
);
const AboutPage = lazy(() =>
  import('pages/AboutPage' /* webpackChunkName: "about-page" */),
);
const BlogPage = lazy(() =>
  import('pages/BlogPage' /* webpackChunkName: "blog-page" */),
);
const BlogPostsPage = lazy(() =>
  import('pages/BlogPostsPage' /* webpackChunkName: "blog-posts-page" */),
);
const BlogPostsSinglePage = lazy(() =>
  import(
    'pages/BlogPostsSinglePage' /* webpackChunkName: "blog-posts-single-page" */
  ),
);
const SinglePage = lazy(() =>
  import('pages/SinglePage' /* webpackChunkName: "single-page" */),
);
const CreatePost = lazy(() =>
  import('pages/CreatePost' /* webpackChunkName: "create-post" */),
);
const EditPost = lazy(() =>
  import('pages/EditPost' /* webpackChunkName: "edit-post" */),
);
const SearchPage = lazy(() =>
  import('pages/SearchPage' /* webpackChunkName: "search-page" */),
);
const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const NotFoundPage = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<h2>Loading...</h2>}>
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
      </Suspense>
    </AuthProvider>
  );
}

export default App;
