import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UPDATE_PROJECT } from "../mutations/projectMutation";
import { GET_PROJECTS } from "../queries/projectQueries";

const EditProjectForm = ({ project }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");

  const [disable, setDisable] = useState(true);

  // update project mutation
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },

    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  // simple form validation
  useEffect(() => {
    if (name !== "" && description !== "" && status !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, description, status]);

  const submitHandler = (event) => {
    event.preventDefault();

    // send data to server
    updateProject(name, description, status);
  };
  return (
    <div>
      <h2>Edit Project</h2>

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

        {/* clientId select box */}

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
            edit project
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProjectForm;
