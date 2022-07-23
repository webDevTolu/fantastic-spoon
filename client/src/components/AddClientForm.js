import { useEffect, useState } from "react";

const AddClientForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [disable, setDisable] = useState(true);

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
    const data = {
      name,
      email,
      phone,
    };
    console.log(data);
    // clears form after submission
    setName("");
    setEmail("");
    setPhone("");
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

      <div className="flex w-full">
        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold capitalize text-lg flex items-center justify-center h-12 w-full"
          disabled={disable}
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default AddClientForm;
