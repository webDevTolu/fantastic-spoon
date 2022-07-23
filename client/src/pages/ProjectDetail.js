import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClientDetails from "../components/ClientDetails";
import ErrorNotification from "../components/ui/ErrorNotification";
import Loading from "../components/ui/Loading";
import { GET_PROJECT } from "../queries/projectQueries";

const ProjectDetail = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorNotification />;

  return (
    <div>
      <Link
        to="/"
        className="h-10 w-10 bg-gray-200 hover:bg-gray-300/80 text-gray-600 hover:text-gray-700 rounded-full flex items-center justify-center shadow-sm hover:shadow-md"
      >
        <svg className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
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
              <span className="text-xs font-medium font-rubik text-stone-400 italic">
                {data.singleProject.status}
              </span>
              <p onClick={() => setShow(!show)} className="text-sm text-stone-700 hover:text-stone-800 font-normal ">
                {!show ? "View CLient" : "Hide"}
              </p>
            </div>
          </div>
          {show && <ClientDetails client={data.singleProject.client} />}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
