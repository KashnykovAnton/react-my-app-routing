import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goBackTwoSteps = () => navigate(-2);

  return (
    <>
      <button onClick={goBack} className="button">
        Go back
      </button>
      <button onClick={goBackTwoSteps} className="button">
        Go back Two Steps
      </button>
      <div className="content-container">
        {id && <h2>Here you can edit Pokemon with id {id}</h2>}
      </div>
    </>
  );
};

export default EditPost;
