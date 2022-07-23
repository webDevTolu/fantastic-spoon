import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import Loading from "./ui/Loading";
import ErrorNotification from "./ui/ErrorNotification";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Loading />;
  if (error) return <ErrorNotification />;

  if (data.allProjects.length === 0) {
    return <p>No projects found</p>;
  }

  return (
    <Fragment>
      {!loading && !error && (
        <div className="w-full p-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {data.allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Projects;
