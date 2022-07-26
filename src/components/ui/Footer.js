const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="h-[10vh] flex flex-col justify-center items-center gap-y-2 bg-gray-900 text-gray-100 p-2 py-4">
      <p>Copyright &copy; {currentYear}</p>
      <p className='flex gap-x-2 items-center'>
        Made with{" "}
        <span className="text-red-600">
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </span>{" "}
        and 😩
      </p>
    </footer>
  );
};

export default Footer;
