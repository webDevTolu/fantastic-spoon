import Clients from "../components/Clients";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-y-8 px-2 justify-center">
      <Projects />
      <Clients />
    </div>
  );
};

export default HomePage;
