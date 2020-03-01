import React from 'react';

// Styles
import './styles.scss';

// UI Components
import {
  TableRow, TableCell, Checkbox, IconButton, Tooltip,
} from '@material-ui/core';

// Models
import { IEmployee, EmployeeProperty } from '../../models/employee';

// Material Icons
import EditIcon from '@material-ui/icons/Edit';

type Props = {
  isSelected: boolean;
  employee: IEmployee;
  fields: EmployeeProperty[];
  onSelect: () => void;
};

export function EmployeeRow({ employee, fields, isSelected, onSelect }: Props) {
  function renderEditEmployee(employeeId: string) {
    return (
      <Tooltip key={`${employee._id}_edit`} title="Edit">
        <IconButton className="Employee-Row-Edit">
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox checked={isSelected} onClick={onSelect} />
      </TableCell>

      {fields.map(field => (
        <TableCell key={`${employee._id}_${field || 'edit'}`} align={field ? "left" : "center"}>
          {/** Add Edit Employee Action if field is empty (end of row) */}
          {field ? employee[field] : renderEditEmployee(employee._id)}
        </TableCell>
      ))}
    </TableRow>
  );
};