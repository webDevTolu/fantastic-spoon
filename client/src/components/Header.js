import { Link } from "react-router-dom";
import logo from "../assets/graphql-logo.png";

const Header = () => {
  return (
    <nav>
      <Link to="/" className="flex gap-x-4 items-center">
        <img src={logo} alt="logo" />
        <h1>Learn graphql</h1>
      </Link>
    </nav>
  );
};

export default Header;
