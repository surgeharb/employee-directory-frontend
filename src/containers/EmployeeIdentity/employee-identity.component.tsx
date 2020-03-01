import React, { useState } from 'react';

// Styles
import { useStyles } from './styles';

// UI Components
import {
  Grid, Paper, TextField, InputLabel, Select, Container,
  FormControl, MenuItem, Avatar, Typography, Button,
} from '@material-ui/core';

// Custom Components
import { EmployeePreview } from '../../components/EmployeePreview';

// Models
import { IEmployee, EmployeeProperty, EmployeePropertyDto } from "../../models/employee";
import { IMAGES } from '../../data';

type Props = {
  data?: IEmployee;
  fields: EmployeePropertyDto[];

  onDataChange: (key: EmployeeProperty, value: any) => void;
};

export function EmployeeIdentityComponent({ data, fields, onDataChange }: Props) {
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
    return fields.map(({ id, label, type }) => {
      const value = getIdValue(id);
      const isSelected = (selectedInputId === id);

      if (type === 'img-picker') {
        return (
          <FormControl variant="outlined" fullWidth className={classes.textField}>
            <InputLabel id={`${id}-label`} className={classes.selectInputLabel}>{label}</InputLabel>
            <Select
              id={id}
              value={value}
              labelId={`${id}-label`}
              onChange={e => onValueChange(e, id)}
            >
              <MenuItem value={-1}>
                <em>None</em>
              </MenuItem>
              {
                IMAGES.map((img, i) => (
                  <MenuItem key={i} value={i}>
                    <Avatar alt={img.alt} src={img.src} className={classes.avatar}></Avatar>
                    <Typography className={classes.selector}>{img.alt}</Typography>
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        );
      }

      return (
        <TextField
          id={id}
          key={id}
          fullWidth
          type={type}
          label={label}
          value={value}
          variant="outlined"
          className={classes.textField}
          onChange={e => onValueChange(e, id)}
          InputLabelProps={{ shrink: !!value || isSelected }}
          onBlur={() => isSelected && setSelectedInputId('')}
          onFocus={() => setSelectedInputId(id)}
        />
      )
    });
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6}>
        <Paper>
          <form noValidate autoComplete="off" className={classes.root}>
            {renderFormTextFields()}
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Paper>
          <EmployeePreview data={data} fields={fields} getIdValue={getIdValue} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.btns}>
          <Container maxWidth="xs" className={classes.btnContainer}>
            <Button variant="contained" color="secondary" className={classes.btn} href="/employees">Discard</Button>
            <Button variant="contained" color="primary" className={classes.btn}>Save Employee</Button>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
}