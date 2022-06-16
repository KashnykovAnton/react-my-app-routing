import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <button onClick={goBack} className="button">
        Go back
      </button>
      <div className="content-container">
        {id && <h2>Here you can edit Pokemon with id {id}</h2>}
        <div className="content-bg"></div>
      </div>
    </>
  );
};

export default EditPost;
