import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
mutation addProject($name: String!, $description: String!, ) {}
`;

//  mutation deleteClient($id: ID!) {
//     deleteClient(id: $id) {
//       id
//       name
//       email
//       phone
//     }
//   }

// mutation {
//   addProject(name: "new project", description: "new description", status: PROGRESS, clientId: "62dac5665d8716b5fe6e4d46") {
//     id
//     name
//     status
//     description
//     client {
//       name
//     }
//   }
// }
