import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_PROJECT } from "../mutations/projectMutation";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";
import ErrorNotification from "./ui/ErrorNotification";
import Loading from "./ui/Loading";

const AddProjectForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("NEW");
  const [disable, setDisable] = useState(true);

  // add project mutation
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, clientId, status },
    update(cache, { data: { addProject } }) {
      const { allProjects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { allProjects: [...allProjects, addProject] },
      });
    },
  });

  // fetches client for clientID in the form
  const { loading, error, data } = useQuery(GET_CLIENTS);

  // simple form validation
  useEffect(() => {
    if (name !== "" && description !== "" && clientId !== "" && status !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, description, clientId, status]);

  const submitHandler = (event) => {
    event.preventDefault();

    // sends data to server
    addProject(name, description, clientId, status);

    // clear form after submit
    setName("");
    setDescription("");
    setClientId("");
    setStatus("Not Started");

    // redirect to homepage after submission
    navigate("/");
  };

  if (loading) return <Loading />;
  if (error) return <ErrorNotification />;

  return (
    <form
      onSubmit={submitHandler}
      className="w-5/6 max-w-md mx-auto flex flex-col gap-y-6 items-center font-rubik justify-center p-4 border rounded-md shadow-lg"
    >
      <div className="flex flex-col gap-y-2 w-full">
        <label className="capitalize text-lg text-slate-800" htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          value={name}
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <label className="capitalize text-lg text-slate-800" htmlFor="clientID">clientID</label>
        {!loading && !error && (
          <select
            name="clientID"
            id="clientID"
            value={clientId}
            onChange={(event) => setClientId(event.target.value)}
          >
            <option value="">Select Client</option>
            {/* maps all the clients and return the id when selected */}
            {data.allClients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <label className="capitalize text-lg text-slate-800" htmlFor="status">status</label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="NEW">Not Started</option>
          <option value="PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <label className="capitalize text-lg text-slate-800" htmlFor="description">description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>

      <div className="flex w-full">
        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold capitalize text-lg flex items-center justify-center h-12 w-full"
          disabled={disable}
        >
          add client
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;
