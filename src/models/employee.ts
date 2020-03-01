export type EmployeeProperty =
  '_id' | 'firstName' | 'lastName' | 'position' | 'department' |
  'nationality' | 'profilePicture' | 'workYears' | 'phoneNumber' | '';

export interface EmployeePropertyDto {
  readonly type?: 'number' | 'img-picker';
  readonly id: EmployeeProperty;
  readonly label: string;
}

export interface IEmployee {
  readonly _id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly position?: string;
  readonly department?: string;
  readonly nationality?: string;
  readonly phoneNumber?: number;
  readonly workYears?: number;
  readonly profilePicture?: number;
}