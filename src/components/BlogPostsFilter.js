import { useState } from 'react';

const BlogPostsFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) {
      params.post = query;
    }
    if (isLatest) {
      params.latest = true;
    }

    setSearchParams(params);
    // console.log(params);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="form">
      <div>
        <label>
          Search post
          <input
            type="search"
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Check last 10 posts
          <input
            type="checkbox"
            name="latest"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
          />
        </label>
      </div>
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
};

export default BlogPostsFilter;
