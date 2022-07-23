import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const params = useParams();
  const { id } = params;
  
  return (
    <div>
      <h1>Project Detail</h1>
      <p>{id}</p>
    </div>
  );
};

export default ProjectDetail;
