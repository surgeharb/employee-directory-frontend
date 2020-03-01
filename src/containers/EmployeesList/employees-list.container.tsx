import React, { useState } from 'react';

// GraphQL
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_EMPLOYEES, COUNT_ALL_EMPLOYEES } from '../../graphql/queries/employee.query';

// Custom Components
import EmployeesListComponent from './employees-list.component';

// Models
import { EmployeePropertyDto } from '../../models/employee';

type Props = {
  fields: EmployeePropertyDto[],
};

function EmployeesListContainer({ fields }: Props) {
  // Pagination - current page
  const [page, setPage] = useState(0);

  // Pagination - current rows per page
  const [pageSize, setPageSize] = useState(10);

  // Pagination - employees database total count
  const { data: countData } = useQuery(COUNT_ALL_EMPLOYEES, { pollInterval: 500 });

  const { loading, data } = useQuery(GET_ALL_EMPLOYEES, {
    variables: { page, pageSize },
    pollInterval: 500
  });

  const employeeFields: EmployeePropertyDto[] = [...fields, { id: '', label: '' }];

  const employees = data?.employees ?? [];

  function handleChangePage(e: any, newPage: number) {
    setPage(newPage);
  }

  function handleChangePageSize(event: any) {
    setPageSize(+event.target.value);
    setPage(0);
  };

  return (
    <EmployeesListComponent
      count={countData?.count ?? 0}
      handleChangePageSize={handleChangePageSize}
      handleChangePage={handleChangePage}
      fields={employeeFields}
      pageSize={pageSize}
      loading={loading}
      data={employees}
      page={page}
    />
  );
}

export default EmployeesListContainer;