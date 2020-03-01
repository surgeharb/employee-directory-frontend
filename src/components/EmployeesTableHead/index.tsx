import React from 'react';

// UI Components
import {
  TableHead, TableRow, TableCell, Checkbox
} from "@material-ui/core";

type Props = {
  onSelectAllClick: () => void;
  numSelected: number;
  headCells: string[];
  rowCount: number;
};

export function EmployeesTableHead({ numSelected, rowCount, headCells, onSelectAllClick }: Props) {
  // Capitalize first character 
  // and remove special characters
  function formatCellHead(text: string) {
    text = text.replace(/[^0-9A-Za-z\s]/g, '');
    return text.charAt(0).toUpperCase() + text.substr(1);
  }

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

        {headCells.map(headCellText => (
          <TableCell key={headCellText}>{formatCellHead(headCellText)}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}