import { Link } from "react-router-dom";
import logo from "../assets/graphql-logo.png";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link to="/" className="flex gap-x-4 items-center">
        <img src={logo} alt="logo" />
        <h1>Learn graphql</h1>
      </Link>

      <div>
        <Link to="/add-client">Add Client</Link>
      </div>
    </nav>
  );
};

export default Header;
