import { Link } from "react-router-dom";
import logo from "../assets/graphql-logo.png";

const Header = () => {
  return (
    <nav className="flex h-[10vh] w-full justify-between items-center p-4 border shadow-sm">
      <Link to="/" className="flex gap-x-1 items-center">
        <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
        <h1 className="font-rubik font-medium text-slate-900 capitalize">Learn graphQL</h1>
      </Link>

      <div className="flex gap-x-2 md:gap-x-4 items-center text-sm md:text-base">
        <Link to="/add-client">Add Client</Link>
        <Link to="/add-project">Add Project</Link>
      </div>
    </nav>
  );
};

export default Header;
