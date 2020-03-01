import React from 'react';

// UI Components
import {
  TableHead, TableRow, TableCell, Checkbox
} from "@material-ui/core";
import { EmployeePropertyDto } from '../../models/employee';

type Props = {
  onSelectAllClick: () => void;
  headCells: EmployeePropertyDto[];
  numSelected: number;
  rowCount: number;
};

export function EmployeesTableHead({ numSelected, rowCount, headCells, onSelectAllClick }: Props) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>

        {headCells.map(headCell => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}