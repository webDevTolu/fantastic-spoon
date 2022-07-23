import Clients from "../components/Clients";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-8 justify-center">
      <Projects />
      <Clients />
    </div>
  );
};

export default HomePage;
