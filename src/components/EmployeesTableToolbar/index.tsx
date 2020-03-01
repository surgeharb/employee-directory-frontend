import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { useStyles } from './styles';

// UI Components
import {
  Toolbar, Typography, Tooltip, IconButton, Button,
} from '@material-ui/core';

// Material Icons
import DeleteIcon from '@material-ui/icons/Delete';
import SearchListIcon from '@material-ui/icons/Search';

type Props = {
  numSelected: number;
  searchEnabled?: boolean;

  onDelete: () => void;
}

export function EmployeesTableToolbar({ numSelected, onDelete, searchEnabled }: Props) {
  const classes = useStyles();

  function renderInitialTooltip() {
    return (
      <>
        <Typography variant="h6" id="tableTitle">
          Employees List
        </Typography>
        <div>
          <NavLink to="/employees/identity">
            <Button variant="outlined" color="primary" className={searchEnabled ? classes.btnMargin : undefined}>
              + Add Employee
            </Button>
          </NavLink>
          {
            searchEnabled && (
              <Tooltip title="Search">
                <IconButton>
                  <SearchListIcon />
                </IconButton>
              </Tooltip>
            )
          }
        </div>
      </>
    );
  }

  function renderSelectedTooltip() {
    return (
      <>
        <Typography color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
        <Tooltip title="Delete" onClick={onDelete}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </>
    );
  }

  return (
    <Toolbar className={classes.toolbar}>
      {(numSelected > 0) ? renderSelectedTooltip() : renderInitialTooltip()}
    </Toolbar>
  );
}