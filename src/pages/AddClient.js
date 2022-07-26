import AddClientForm from "../components/AddClientForm";

const AddClient = () => {
  return (
    <div className='w-full flex flex-col gap-y-4 font-rubik'>
      <h2 className="text-2xl font-light text-slate-800">Create New client</h2>
      <AddClientForm />
    </div>
  );
};

export default AddClient;
