import gql from 'graphql-tag';

export const ADD_EMPLOYEE = gql`
  mutation AddEmployee(
    $phoneNumber: Int!
    $firstName: String!
    $lastName: String!
    $position: String!
    $department: String!
    $nationality: String!
    $profilePicture: Float!
  ) {
    addEmployee(
      phoneNumber: $phoneNumber
      firstName: $firstName
      lastName: $lastName
      position: $position
      department: $department
      nationality: $nationality
      profilePicture: $profilePicture
    ) {
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