import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <div className="buttons-block">
        <button onClick={goBack}>Go back</button>
      </div>
      <div>{id && <h2>Here you can edit Pokemon with id {id}</h2>}</div>
    </>
  );
};

export default EditPost;
