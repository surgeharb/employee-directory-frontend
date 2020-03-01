import React, { useState, useEffect } from 'react';

// Custom Components
import EmployeesListComponent from './employees-list.component';

// Models
import { IEmployee, EmployeeProperty, EmployeePropertyDto } from '../../models/employee';

type Props = {
  fields: EmployeePropertyDto[];
};

function EmployeesListContainer({ fields }: Props) {
  const [data, setData] = useState<IEmployee[]>([]);

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
    <EmployeesListComponent data={data} fields={[...fields, { id: '', label: '' }]} />
  );
}

export default EmployeesListContainer;