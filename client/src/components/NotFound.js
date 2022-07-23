import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-[80vh]  flex items-center justify-center font-rubik">
      <div className="w-5/6 mx-auto flex items-start gap-x-4 ">
        <h3 className="text-5xl text-indigo-600 font-bold ">404</h3>
        <div className="border-l p-1 pl-2 border-gray-600 flex flex-col gap-y-2">
          <h1 className="text-3xl text-slate-800 font-bold">Page not found</h1>
          <p className="text-sm text-slate-400 font-normal">
            Please check the URL in the address bar and try again.
          </p>
          <Link
            to="/"
            className="text-white text-sm bg-indigo-600 rounded-md flex-none w-max px-4 py-2"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
