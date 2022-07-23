import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddClientForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [disable, setDisable] = useState(true);

  const navigate = useNavigate();

  // simple form validation
  // not perfect for email validation tho
  useEffect(() => {
    if (
      name.trim().length > 0 &&
      phone.trim().length > 6 &&
      email.trim().length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, phone, email]);

  const submitHandler = (event) => {
    event.preventDefault();
    // sends data to server
    addClient(name, email, phone);
    // clears form after submission
    setName("");
    setEmail("");
    setPhone("");

    // navigates to home page after submission
    navigate('/')
  };

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {
      name,
      email,
      phone,
    },
    update(cache, { data: { addClient } }) {
      const { allClients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { allClients: [...allClients, addClient] }, // adds new client to the rests of the clients list
      });
    },
  });

  return (
    <form
      onSubmit={submitHandler}
      className="w-1/2 mx-auto flex flex-col gap-y-6 items-center justify-center p-4 border rounded-md shadow-lg"
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
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          value={email}
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          name="phone"
          value={phone}
          id="phone"
          onChange={(event) => setPhone(event.target.value)}
        />
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

export default AddClientForm;
