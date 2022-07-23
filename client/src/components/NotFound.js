import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>oops! This page is missing</div>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default NotFound;
