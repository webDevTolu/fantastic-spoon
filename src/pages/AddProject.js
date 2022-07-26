import AddProjectForm from "../components/AddProjectForm";
import BackBtn from "../components/ui/BackBtn";

const AddProject = () => {
  return (
    <div className='w-full p-3 flex flex-col gap-y-4'>
      <BackBtn />
      <h2>Create a new project</h2>
      <AddProjectForm />
    </div>
  );
};

export default AddProject;
