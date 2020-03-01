export type EmployeeProperty =
  '' | '_id' | 'name' | 'position' | 'department' | 'nationality' |
  'profilePicture' | 'workYears' | 'birthdate' | 'idNumber';

export interface EmployeePropertyDto {
  readonly id: EmployeeProperty;
  readonly label: string;
}

export interface IEmployee {
  readonly _id: string;
  readonly name?: string;
  readonly position?: string;
  readonly department?: string;
  readonly nationality?: string;
  readonly profilePicture?: string;
  readonly workYears?: number;
  readonly birthdate?: number;
  readonly idNumber?: number;
}