import { useQuery } from "@apollo/client";
// gql used to write the query exactly how you write it in graphiql
// useQuery used to fetch the data from the server using the query

import Loading from "./ui/Loading";
import ErrorNotification from "./ui/ErrorNotification";
import { Fragment } from "react";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Loading />;
  if (error) return <ErrorNotification />;

  return (
    <Fragment>
      <h2 className="text-xl text-slate-900 font-bold font-rubik">Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-md shadow-sm overflow-hidden">
        {!loading && !error && data.allClients.map((client) => (
          <ClientRow key={client.id} client={client} />
        ))}
      </div>
    </Fragment>
  );
};

export default Clients;
