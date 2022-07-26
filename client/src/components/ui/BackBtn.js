import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <Link
      to="/"
      className="h-10 w-10 bg-gray-200 hover:bg-gray-300/80 text-gray-600 hover:text-gray-700 rounded-full flex items-center justify-center shadow-sm hover:shadow-md"
    >
      <svg className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

export default BackBtn;
