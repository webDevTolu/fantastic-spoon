import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  {
    allProjects {
      id
      name
      description
      status
    }
  }
`;
