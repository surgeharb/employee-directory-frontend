import React, { useState } from 'react';

// Styles
import { useStyles } from './styles';

// UI Components
import {
  Grid, Paper, TextField
} from '@material-ui/core';

// Custom Components
import { EmployeePreview } from '../../components/EmployeePreview';

// Models
import { IEmployee, EmployeeProperty, EmployeePropertyDto } from "../../models/employee";

type Props = {
  data?: IEmployee;
  fields: EmployeePropertyDto[];

  onDataChange: (key: EmployeeProperty, value: any) => void;
};

export function AddEditEmployeeComponent({ data, fields, onDataChange }: Props) {
  const classes = useStyles();

  // Keep track of currently selected input
  const [selectedInputId, setSelectedInputId] = useState<string>();

  // Parse value from object property key
  function getIdValue(id: EmployeeProperty) {
    return `${((data && !!id) ? data[id] : '') || ''}`;
  }

  function onValueChange(event: any, id: EmployeeProperty) {
    onDataChange(id, `${event.target.value}`);
  }

  function renderFormTextFields() {
    return fields.map(({ id, label }) => {
      const value = getIdValue(id);
      const isSelected = (selectedInputId === id);

      return (
        <TextField
          id={id}
          key={id}
          fullWidth
          label={label}
          value={value}
          variant="outlined"
          className={classes.textField}
          onFocus={() => setSelectedInputId(id)}
          onChange={(e: any) => onValueChange(e, id)}
          InputLabelProps={{ shrink: !!value || isSelected }}
          onBlur={() => isSelected && setSelectedInputId('')}
        />
      )
    });
  }

  return (
    <Grid container spacing={3}>
      <Grid item md={6} sm={12}>
        <Paper>
          <form noValidate autoComplete="off" className={classes.root}>
            {renderFormTextFields()}
          </form>
        </Paper>
      </Grid>
      <Grid item md={6} sm={12}>
        <Paper>
          <EmployeePreview data={data} fields={fields} getIdValue={getIdValue} />
        </Paper>
      </Grid>
    </Grid>
  );
}