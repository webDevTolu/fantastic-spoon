import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-[65vh] flex justify-center items-center font-rubik">
      <div className="w-5/6 md:w-3/4 mx-auto flex items-start gap-x-4">
        <h3 className="text-4xl md:text-5xl text-indigo-600 font-bold ">404</h3>
        <div className="border-l-2 p-1 pl-2 border-gray-300 flex flex-col gap-y-2 md:gap-y-3">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
            Page not found
          </h1>
          <p className="text-sm md:text-lg text-slate-400 font-normal">
            Please check the URL in the address bar and try again.
          </p>
          <Link
            to="/"
            className="text-white text-sm md:text-lg bg-indigo-600 rounded-md flex-none w-max px-4 py-2"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
