import gql from 'graphql-tag';

export const GET_ALL_EMPLOYEES = gql`
  query GetEmployees {
    employees: getEmployees {
      _id
      phoneNumber
      firstName
      lastName
      position
      department
      nationality
      profilePicture
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query Employee($id: String!) {
    employee: getEmployee(id: $id) {
      _id
      phoneNumber
      firstName
      lastName
      position
      department
      nationality
      profilePicture
    }
  }
`;