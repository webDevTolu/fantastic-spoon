const ClientDetails = ({ client }) => {
  return (
    <div className="flex flex-col gap-y-2 p-3 pb-0 font-rubik">
      <p className="text-lg font-bold text-stone-600">{client.name}</p>
      <p className="text-sm text-blue-600 underline cursor-pointer">
        {client.email}
      </p>
      <p className="text-sm text-gray-800 font-medium cursor-pointer">
        {client.phone}
      </p>
    </div>
  );
};

export default ClientDetails;
