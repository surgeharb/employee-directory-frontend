import React, { useState } from 'react';

// GraphQL
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_EMPLOYEE } from '../../graphql/mutations/remove-employee.mutation';

// UI Components
import {
  Table, TableBody, Paper, TableContainer,
  TablePagination, CircularProgress,
} from '@material-ui/core';

// Custom Components
import { EmployeeRow } from '../../components/EmployeeRow';
import { EmployeesTableHead } from '../../components/EmployeesTableHead';
import { EmployeesTableToolbar } from '../../components/EmployeesTableToolbar';

// Models
import { IEmployee, EmployeePropertyDto } from '../../models/employee';

type Props = {
  data: IEmployee[],
  fields: EmployeePropertyDto[],
  loading: boolean,
};

function EmployeesListComponent({ data, fields, loading }: Props) {
  const [removeEmployee] = useMutation(REMOVE_EMPLOYEE);

  // Pagination - current page
  const [page, setPage] = useState(0);

  // Pagination - current rows per page
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Employees Table Rows - selected rows array
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);

  function handleChangePage(event: any, newPage: number) {
    setPage(newPage);
  };

  function handleChangeRowsPerPage(event: any) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function removeSelectedEmployees() {
    selectedEmployees.forEach(employeeId =>
      removeEmployee({ variables: { id: employeeId } })
    );

    setSelectedEmployees([]);
  }

  // Remove employeeId if already selected, otherwise add "employeeId"
  function onEmployeeRowSelected(employeeId: string) {
    // Copy to alter selectedEmployees original array
    const currentlySelected = [...selectedEmployees];

    const selectedIndex = currentlySelected.indexOf(employeeId);
    const alreadySelected = selectedIndex >= 0;
    
    if (alreadySelected) {
      // Uncheck and remove selected employee
      currentlySelected.splice(selectedIndex, 1);
      setSelectedEmployees(currentlySelected);
    } else {
      // Check and add selected employee
      currentlySelected.push(employeeId);
      setSelectedEmployees(currentlySelected);
    }
  }

  function onSelectAllClick() {
    if (!selectedEmployees.length) {
      // Check all employees if none is selected
      setSelectedEmployees([...data.map(employee => employee._id)]);
    } else {
      // Uncheck all employees otherwise
      setSelectedEmployees([]);
    }
  }

  function renderTableBody() {
    return (
      <TableBody>
        {data.map(employee => (
          <EmployeeRow
            fields={fields}
            key={employee._id}
            employee={employee}
            onSelect={() => onEmployeeRowSelected(employee._id)}
            isSelected={selectedEmployees.includes(employee._id)}
          />
        ))}
      </TableBody>
    );
  }

  function renderTablePagination() {
    return (
      <TablePagination
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50]}
        page={page}
      />
    );
  }

  if (loading) {
    return (<CircularProgress />);
  }

  return (
    <Paper>
      <EmployeesTableToolbar
        numSelected={selectedEmployees.length}
        onDelete={removeSelectedEmployees}
      />
      <TableContainer>
        <Table>
          {/** Table Head */}
          <EmployeesTableHead
            headCells={fields}
            rowCount={data.length}
            onSelectAllClick={onSelectAllClick}
            numSelected={selectedEmployees.length}
          />

          {/** Table Body */}
          {renderTableBody()}
        </Table>
      </TableContainer>

      {/** Table Pagination */}
      {renderTablePagination()}
    </Paper>
  );
}

export default EmployeesListComponent;