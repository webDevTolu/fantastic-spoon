import { gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  {
    allClients {
      id
      name
      email
      phone
    }
  }
`;
