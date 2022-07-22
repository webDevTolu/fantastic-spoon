import { gql, useQuery } from "@apollo/client";
// gql used to write the query exactly how you write it in graphiql
// useQuery used to fetch the data from the server using the query

import Loading from "./ui/Loading";
import ErrorNotification from "./ui/ErrorNotification";
import { Fragment } from "react";

const GET_CLIENTS = gql`
  {
    allClients {
      id
      name
      email
      phone
    }
  }
`;

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Loading />;
  if (error) return <ErrorNotification />;

  return <Fragment>{!loading && !error && <h1>Clients</h1>}</Fragment>;
};

export default Clients;
