import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {
      id: client.id,
    },
    // method 1, but it's not efficient for large data
    // refetchQueries: [{ query: GET_CLIENTS }],

    // method 2, reads data from the delete mutation and filters it from the list of data
    // update(cache, { data: { deleteClient } }) {
    //   const { allClients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       allClients: allClients.filter(
    //         (client) => client.id !== deleteClient.id
    //       ),
    //     },
    //   });
    // },

    // method 3: using refetchQueries for both clients and projects since we're now cascading deletes
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  return (
    <div className="w-full p-4 border flex flex-col gap-y-2 justify-center font-rubik">
      <p className='text-lg font-bold text-slate-800'>{client.name}</p>
      <p className="text-base text-blue-600 font-medium">{client.email}</p>
      <p className='text-sm font-bold text-slate-600'>{client.phone}</p>
      <button
        onClick={deleteClient}
        className="cursor-pointer text-red-600 place-self-end"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default ClientRow;
