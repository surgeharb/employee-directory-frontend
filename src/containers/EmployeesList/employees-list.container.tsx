import React, { useState, useEffect } from 'react';

// Custom Components
import EmployeesListComponent from './employees-list.component';

// Models
import { IEmployee, EmployeeProperty } from '../../models/employee';

function EmployeesListContainer() {
  const [data, setData] = useState<IEmployee[]>([]);

  // Property fields of employee to be displayed in table rows
  const [fields] = useState<EmployeeProperty[]>(['_id', 'name', 'department', 'position', 'nationality', '']);

  // runs once in component lifecycle
  useEffect(() => {
    const tempData = [
      { _id: '1', idNumber: 1, name: 'Surge', department: 'Engineering', position: 'Backend Engineer', nationality: 'Lebanese' },
      { _id: '2', idNumber: 2, name: 'John', department: 'Engineering', position: 'Frontend Engineer', nationality: 'Lebanese' },
      { _id: '3', idNumber: 3, name: 'Mona', department: 'Sales', position: 'Sales Manager', nationality: 'Lebanese' },
      { _id: '4', idNumber: 4, name: 'Ray', department: 'Sales', position: 'Head of Sales', nationality: 'Lebanese' },
      { _id: '5', idNumber: 5, name: 'Joe', department: 'Human Resources', position: 'HR Manager', nationality: 'Lebanese' },
    ];

    setData(tempData);
  }, []);

  return (
    <EmployeesListComponent data={data} fields={fields} />
  );
}

export default EmployeesListContainer;