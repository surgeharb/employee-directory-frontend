import gql from 'graphql-tag';

export const REMOVE_EMPLOYEE = gql`
  mutation RemoveEmployee($id: String!) {
    removeEmployee(id: $id) {
      _id
    }
  }
`;