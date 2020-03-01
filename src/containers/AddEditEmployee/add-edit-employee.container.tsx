import React, { useState } from 'react';

// Custom Components
import { AddEditEmployeeComponent } from './add-edit-employee.component';

// Models
import { IEmployee, EmployeeProperty, EmployeePropertyDto } from '../../models/employee';

const employeeFieldsDto: EmployeePropertyDto[] = [
  { id: 'idNumber', label: 'ID Number' },
  { id: 'name', label: 'Name' },
  { id: 'department', label: 'Department' },
  { id: 'position', label: 'Position' },
  { id: 'nationality', label: 'Nationality' },
];

function AddEditEmployeeContainer() {
  const [employeeData, setEmployeeData] = useState<IEmployee>();

  // Property fields of employee to be displayed in table rows
  const [fields] = useState<EmployeePropertyDto[]>(employeeFieldsDto);

  function onDataChange(key: EmployeeProperty, value: any) {
    const currentEmployee: IEmployee = employeeData || { _id: '' };
    setEmployeeData({ ...currentEmployee, [key]: value });
  } 

  return (
    <AddEditEmployeeComponent data={employeeData} fields={fields} onDataChange={onDataChange} />
  );
}

export default AddEditEmployeeContainer;