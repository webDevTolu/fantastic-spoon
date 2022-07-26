import AddProjectForm from "../components/AddProjectForm";
import BackBtn from "../components/ui/BackBtn";

const AddProject = () => {
  return (
    <div className='w-full p-3 flex flex-col gap-y-4 font-rubik'>
      <BackBtn />
      <h2 className="text-2xl font-light text-slate-800">Create a new project</h2>
      <AddProjectForm />
    </div>
  );
};

export default AddProject;
