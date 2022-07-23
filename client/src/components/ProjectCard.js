import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full p-3 border shadow-sm rounded flex flex-col justify-between gap-y-3">
      <h2>{project.name}</h2>

      <div className="flex justify-between">
        <span className="text-sm text-gray-500 font-light">{project.status}</span>
        <Link to={`/projects/${project.id}`} className="">
          view
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
