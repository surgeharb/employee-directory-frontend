import React, { useState } from 'react';

// Custom Components
import { EmployeeIdentityComponent } from './employee-identity.component';

// Models
import { IEmployee, EmployeeProperty, EmployeePropertyDto } from '../../models/employee';

type Props = {
  fields: EmployeePropertyDto[];
};

function EmployeeIdentityContainer({ fields }: Props) {
  const [employeeData, setEmployeeData] = useState<IEmployee>();

  function onDataChange(key: EmployeeProperty, value: any) {
    const currentEmployee: IEmployee = employeeData || { _id: '' };
    setEmployeeData({ ...currentEmployee, [key]: value });
  } 

  return (
    <EmployeeIdentityComponent data={employeeData} fields={fields} onDataChange={onDataChange} />
  );
}

export default EmployeeIdentityContainer;