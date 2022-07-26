import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ClientDetails from "../components/ClientDetails";
import DeleteProjectBtn from "../components/DeleteProjectBtn";
import EditProjectBtn from "../components/EditProjectBtn";
import ErrorNotification from "../components/ui/ErrorNotification";
import Loading from "../components/ui/Loading";
import { GET_PROJECT } from "../queries/projectQueries";
import BackBtn from "../components/ui/BackBtn";
import EditProjectForm from "../components/EditProjectForm";

const ProjectDetail = () => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(null);

  const showFormHandler = (value) => {
    setShowForm(value);
  };

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorNotification />;

  return (
    <div>
      <BackBtn />
      <h1>Project Detail</h1>

      {!loading && !error && (
        <div className="w-5/6 mx-auto my-4 border shadow-md p-3 grid grid-cols-1 gap-y-2 divide-y divide-gray-200 rounded-md">
          <div className="flex flex-col gay-y-2">
            <h2 className="text-2xl font-bold font-rubik text-stone-800">
              {data.singleProject.name}
            </h2>
            <p className="text-base font-rubik text-stone-600">
              {data.singleProject.description}
            </p>
            <div className="flex justify-between items-center mt-1">
              <span
                className={`text-xs font-medium font-rubik italic ${
                  data.singleProject.status === "Not Started"
                    ? "text-red-400"
                    : data.singleProject.status === "In Progress"
                    ? "text-amber-400"
                    : data.singleProject.status === "Completed"
                    ? "text-green-400"
                    : ""
                }`}
              >
                {data.singleProject.status}
              </span>
              <p
                onClick={() => setShow(!show)}
                className="text-sm text-stone-700 hover:text-stone-800 font-normal cursor-pointer"
              >
                {!show ? "View CLient" : "Hide"}
              </p>
            </div>
          </div>
          {show && <ClientDetails client={data.singleProject.client} />}
          <div className="flex justify-end gap-x-4 p-1">
            <EditProjectBtn onShowForm={showFormHandler} />
            <DeleteProjectBtn projectId={id} />
          </div>
        </div>
      )}

      {showForm && <EditProjectForm project={data.singleProject} />}
    </div>
  );
};

export default ProjectDetail;
