import gql from 'graphql-tag';

export const COUNT_ALL_EMPLOYEES = gql`
  query CountEmployees {
    count: countEmployees
  }
`;

export const GET_ALL_EMPLOYEES = gql`
  query GetEmployees($page: Int!, $pageSize: Int!) {
    employees: getEmployees(page: $page, pageSize: $pageSize) {
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