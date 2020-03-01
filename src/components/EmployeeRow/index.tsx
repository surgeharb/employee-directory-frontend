import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { useStyles } from './styles';

// UI Components
import {
  TableRow, TableCell, Checkbox, IconButton, Tooltip,
} from '@material-ui/core';

// Models
import { IEmployee, EmployeePropertyDto } from '../../models/employee';

// Material Icons
import EditIcon from '@material-ui/icons/Edit';

type Props = {
  isSelected: boolean;
  employee: IEmployee;
  fields: EmployeePropertyDto[];

  onSelect: () => void;
};

export function EmployeeRow({ employee, fields, isSelected, onSelect }: Props) {
  const classes = useStyles();

  function renderEditEmployee(employeeId: string) {
    return (
      <NavLink to={`/employees/${employeeId}/identity`}>
        <Tooltip key={`${employee._id}_edit`} title="Edit">
          <IconButton className={classes.editBtn}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </NavLink>
    );
  }

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox checked={isSelected} onClick={onSelect} />
      </TableCell>

      {fields.map(({ id }) => (
        <TableCell key={`${employee._id}_${id || 'edit'}`} align={id ? "left" : "center"}>
          {/** Add Edit Employee Action if field is empty (end of row) */}
          {id ? employee[id] : renderEditEmployee(employee._id)}
        </TableCell>
      ))}
    </TableRow>
  );
};