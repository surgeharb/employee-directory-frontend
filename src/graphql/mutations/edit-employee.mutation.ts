import gql from 'graphql-tag';

export const EDIT_EMPLOYEE = gql`
  mutation EditEmployee(
    $_id: String!
    $phoneNumber: Int!
    $firstName: String!
    $lastName: String!
    $position: String!
    $department: String!
    $nationality: String!
    $profilePicture: Float!
  ) {
    editEmployee(
      _id: $_id
      phoneNumber: $phoneNumber
      firstName: $firstName
      lastName: $lastName
      position: $position
      department: $department
      nationality: $nationality
      profilePicture: $profilePicture
    ) {
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