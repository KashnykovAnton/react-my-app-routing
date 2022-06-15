import { Link, useMatch } from 'react-router-dom';
import BorderForLink from './BorderForLink';

const CustomLink = ({ children, to, ...props }) => {
  // const match = useMatch(to);
  const match = useMatch({
    path: to,
    // end: false,
    end: to.length === 1,
  });

  console.log(match);
  return (
    <BorderForLink>
      <Link
        to={to}
        style={{
          color: match ? 'pink' : 'blueviolet',
        }}
        {...props}
      >
        {children}
      </Link>
    </BorderForLink>
  );
};

export default CustomLink;
