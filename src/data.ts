// Models
import { EmployeePropertyDto } from "./models/employee";

// Images
import Employee1 from './assets/images/employee1.png';
import Employee2 from './assets/images/employee2.png';
import Employee3 from './assets/images/employee3.png';
import Employee4 from './assets/images/employee4.png';

export const IMAGES = [
  { src: Employee2, alt: 'Red Suit Employee' },
  { src: Employee3, alt: 'Blue Suit Employee' },
  { src: Employee4, alt: 'Grey Suit Employee' },
  { src: Employee1, alt: 'Brown Suit Employee' },
];

export const employeesListFields: EmployeePropertyDto[] = [
  { id: 'idNumber', label: 'ID Number', type: 'number' },
  { id: 'name', label: 'Name' },
  { id: 'department', label: 'Department' },
  { id: 'position', label: 'Position' },
  { id: 'nationality', label: 'Nationality' },
];

export const employeeIdentityFields: EmployeePropertyDto[] = [
  { id: 'profilePicture', label: 'Profile Picture', type: 'img-picker' },
  ...employeesListFields,
];