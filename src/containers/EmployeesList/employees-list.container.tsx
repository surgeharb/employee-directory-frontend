import React from 'react';

// GraphQL
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_EMPLOYEES } from '../../graphql/queries/employee.query';

// Custom Components
import EmployeesListComponent from './employees-list.component';

// Models
import { EmployeePropertyDto } from '../../models/employee';

type Props = {
  fields: EmployeePropertyDto[],
};

function EmployeesListContainer({ fields }: Props) {
  const { loading, data } = useQuery(GET_ALL_EMPLOYEES, { pollInterval: 500 });

  const employeeFields: EmployeePropertyDto[] = [...fields, { id: '', label: '' }];

  const employees = data?.employees ?? [];

  return (
    <EmployeesListComponent loading={loading} data={employees} fields={employeeFields} />
  );
}

export default EmployeesListContainer;