import React from 'react';

// Styles
import './styles.scss';

// UI Components
import {
  Toolbar, Typography, Tooltip, IconButton,
} from '@material-ui/core';

// Material Icons
import DeleteIcon from '@material-ui/icons/Delete';
import SearchListIcon from '@material-ui/icons/Search';

type Props = {
  numSelected: number;
  onDelete: () => void;
}

export function EmployeesTableToolbar({ numSelected, onDelete }: Props) {
  return (
    <Toolbar className="Table-Toolbar">
      {numSelected > 0 ? (
        <Typography color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
          <Typography variant="h6" id="tableTitle">
            Employees List
        </Typography>
        )}

      {numSelected > 0 ? (
        <Tooltip title="Delete" onClick={onDelete}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <SearchListIcon />
            </IconButton>
          </Tooltip>
        )}
    </Toolbar>
  );
}