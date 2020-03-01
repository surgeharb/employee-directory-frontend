import React from 'react';

// Styles
import { useStyles } from './styles';

// UI Components
import {
  Avatar, Grid, Chip
} from '@material-ui/core';

// Models
import { IEmployee, EmployeePropertyDto, EmployeeProperty } from '../../models/employee';

// Data
import { IMAGES } from '../../data';

type Props = {
  data?: IEmployee;
  fields: EmployeePropertyDto[];

  getIdValue?: (id: EmployeeProperty) => string;
};

export function EmployeePreview({ data, fields, getIdValue }: Props) {
  const classes = useStyles();

  const pp = data?.profilePicture ?? -1;
  const imgAlt = (pp >= 0) ? IMAGES[pp - 1].alt : 'img';
  const imgSrc = (pp >= 0) ? IMAGES[pp - 1].src : undefined;

  function filterTextFields({ id }: EmployeePropertyDto) {
    const removed: EmployeeProperty[] = ['profilePicture'];
    return !removed.includes(id);
  }

  return (
    <Grid container className={classes.root}>
      <Grid item md={12} className={classes.avatarContainer}>
        <Avatar alt={imgAlt} src={imgSrc} className={classes.avatar} />
      </Grid>

      <Grid item md={12} className={classes.infoGrid}>
        {
          fields.filter(filterTextFields).map(({ id, label }) => (
            <Grid container key={id} className={classes.subGrid}>
              <Grid item xs={6}>
                <span>{label}</span>
                <span>:&nbsp;</span>
              </Grid>
              <Grid item xs={6}>
                <Chip clickable label={getIdValue ? getIdValue(id) || 'none' : id} />
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  )
}