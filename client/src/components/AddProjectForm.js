import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ADD_PROJECT } from "../mutations/projectMutation";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";
import ErrorNotification from "./ui/ErrorNotification";
import Loading from "./ui/Loading";

const AddProjectForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientID, setClientID] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [disable, setDisable] = useState(true);

  // fetches client for clientID in the form
  const { loading, error, data } = useQuery(GET_CLIENTS);

  // add project mutation
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {
      name,
      description,
      status,
      clientID,
    },
    update(cache, { data: { addProject } }) {
      const { allProjects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { allClients: [...allProjects, addProject] }, // adds new client to the rests of the clients list
      });
    },
  });

  // simple form validation
  useEffect(() => {
    if (name !== "" && description !== "" && clientID !== "" && status !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, description, clientID, status]);

  const submitHandler = (event) => {
    event.preventDefault();

    // sends data to server
    addProject(name, description, clientID, status)
  };

  if (loading) return <Loading />;
  if (error) return <ErrorNotification />;

  return (
    <form
      onSubmit={submitHandler}
      className="w-5/6 mx-auto flex flex-col gap-y-6 items-center justify-center p-4 border rounded-md shadow-lg"
    >
      <div className="flex flex-col gap-y-2 w-full">
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          value={name}
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <label htmlFor="clientID">clientID</label>
        {!loading && !error && (
          <select
            name="clientID"
            id="clientID"
            value={clientID}
            onChange={(event) => setClientID(event.target.value)}
          >
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
        <label htmlFor="status">status</label>
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
        <label htmlFor="description">description</label>
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
