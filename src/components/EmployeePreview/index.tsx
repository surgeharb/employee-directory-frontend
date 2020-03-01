import React from 'react';

// Styles
import { useStyles } from './styles';

// UI Components
import {
  Avatar, Grid
} from '@material-ui/core';

// Models
import { IEmployee, EmployeePropertyDto, EmployeeProperty } from '../../models/employee';

type Props = {
  data?: IEmployee;
  fields: EmployeePropertyDto[];

  getIdValue?: (id: EmployeeProperty) => string;
};

export function EmployeePreview({ data, fields, getIdValue }: Props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item md={12} className={classes.avatarContainer}>
        <Avatar alt="Remy Sharp" className={classes.avatar} />
      </Grid>

      <Grid item md={12}>
        {
          fields.map(({ id, label }) => (
            <span key={id}>
              <span>{label}</span>
              <span>:&nbsp;</span>
              <span>{getIdValue ? getIdValue(id) : id}</span>
              <br />
            </span>
          ))
        }
      </Grid>
    </Grid>
  )
}