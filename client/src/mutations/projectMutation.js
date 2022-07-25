import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
mutation addProject($name: String!, $description: String!, $status: ProjectStatus!, $clientID: ID!) {
  addProject(name: $name, description: $description, status:
  $status, clientID: $clientID) {
    id
    name
    description
    status
    client {
      id
      name
      email
      phone
    }
  }
}
`;
