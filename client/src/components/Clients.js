import { gql, useQuery } from "@apollo/client";
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
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.allClients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default Clients;
