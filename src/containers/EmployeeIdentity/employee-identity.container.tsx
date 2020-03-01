import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// GraphQL
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_EMPLOYEE } from '../../graphql/queries/employee.query';
import { ADD_EMPLOYEE } from '../../graphql/mutations/add-employee.mutation';
import { EDIT_EMPLOYEE } from '../../graphql/mutations/edit-employee.mutation';

// Custom Components
import { EmployeeIdentityComponent } from './employee-identity.component';

// Models
import { IEmployee, EmployeeProperty, EmployeePropertyDto } from '../../models/employee';

type Props = {
  fields: EmployeePropertyDto[],
};

function EmployeeIdentityContainer({ fields }: Props) {
  const { id = '' } = useParams();

  // Mutations - Add/Edit Employee
  const [addEmployee] = useMutation(ADD_EMPLOYEE);
  const [editEmployee] = useMutation(EDIT_EMPLOYEE);

  // Local Employee Data
  const [employeeData, setEmployeeData] = useState<IEmployee>();

  // Query - Get Employee
  const { data: queryData } = useQuery(GET_EMPLOYEE, { variables: { id } });

  useEffect(() => {
    if (queryData?.employee) {
      // Update employee data from
      // GraphQL Server if id in path
      setEmployeeData(queryData.employee)
    }
  }, [queryData]);

  function onDataChange(key: EmployeeProperty, value: any) {
    const currentEmployee: IEmployee = employeeData || { _id: '' };
    setEmployeeData({ ...currentEmployee, [key]: value });
  }

  function onSaveEmployee() {
    const params = { variables: employeeData };
    id ? addEmployee(params) : editEmployee(params);
  }

  return (
    <EmployeeIdentityComponent data={employeeData} fields={fields} onDataChange={onDataChange} onSubmit={onSaveEmployee} />
  );
}

export default EmployeeIdentityContainer;