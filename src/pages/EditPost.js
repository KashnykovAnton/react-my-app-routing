import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();

  return <div>{id && <h2>Here you can edit Pokemon with id {id}</h2>}</div>;
};

export default EditPost;
