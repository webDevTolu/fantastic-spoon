import AddProjectForm from "../components/AddProjectForm";

const AddProject = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <h2>Create a new project</h2>
      <AddProjectForm />
    </div>
  );
};

export default AddProject;
