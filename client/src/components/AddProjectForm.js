import { useEffect, useState } from "react";

const AddProjectForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientID, setClientID] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [disable, setDisable] = useState(true);

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
    console.log(status);
  };

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
        <input
          type="text"
          name="clientID"
          value={clientID}
          id="clientID"
          onChange={(event) => setClientID(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <label htmlFor="status">status</label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
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
