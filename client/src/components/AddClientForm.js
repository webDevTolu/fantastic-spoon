import { useState } from "react";

const AddClientForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      phone,
    };
    console.log(data);
  };

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

      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default AddClientForm;
