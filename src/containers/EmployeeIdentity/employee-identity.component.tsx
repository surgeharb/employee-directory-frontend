import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

// Styles
import { useStyles } from './styles';

// UI Components
import {
  Grid, Paper, TextField, InputLabel, Select, Container,
  FormControl, MenuItem, Avatar, Typography, Button, Snackbar,
} from '@material-ui/core';

import { Alert } from '@material-ui/lab';

// Custom Components
import { EmployeePreview } from '../../components/EmployeePreview';

// Models
import { IEmployee, EmployeeProperty, EmployeePropertyDto } from "../../models/employee";

// Data
import { IMAGES } from '../../data';

type Props = {
  data?: IEmployee,
  fields: EmployeePropertyDto[],

  onSubmit: () => void,
  onDataChange: (key: EmployeeProperty, value: any) => void,
};

export function EmployeeIdentityComponent({ data, fields, onDataChange, onSubmit }: Props) {
  const classes = useStyles();
  const history = useHistory();

  // Error Alert on submission
  const [alertIsShown, setAlertIsShown] = useState(false);

  // Keep track of currently selected input
  const [selectedInputId, setSelectedInputId] = useState<string>();

  // Parse value from object property key
  function getIdValue(id: EmployeeProperty) {
    return `${((data && !!id) ? data[id] : '') || ''}`;
  }

  // TextFields Validation
  function isEveryInputValid() {
    return !fields.map(({ id }) => !!getIdValue(id)).includes(false);
  }

  function onSaveClicked() {
    if (isEveryInputValid()) {
      history.goBack();
      onSubmit();
    } else {
      setAlertIsShown(true);

      setTimeout(() => {
        setAlertIsShown(false);
      }, 2000);
    }
  }

  function onValueChange(event: any, id: EmployeeProperty, inputType = '') {
    const regex = (inputType === 'number') ? /[^0-9]/g : '';
    let value: any = `${event.target.value}`.replace(regex, '');

    // Accept only 30 characters on each form
    value = value.substr(0, 30);

    if (['number', 'img-picker'].includes(inputType)) {
      value = +value;
    }
    
    onDataChange(id, value);
  }

  function renderFormTextFields() {
    return fields.map(({ id, label, type }) => {
      const value = getIdValue(id);
      const isSelected = (selectedInputId === id);

      if (type === 'img-picker') {
        return (
          <FormControl key={`${id}-input`} variant="outlined" fullWidth className={classes.textField}>
            <InputLabel id={`${id}-label`} className={classes.selectInputLabel}>{label}</InputLabel>
            <Select
              id={id}
              value={value}
              labelId={`${id}-label`}
              onChange={e => onValueChange(e, id, type)}
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              {
                IMAGES.map((img, i) => (
                  <MenuItem key={i} value={i+1}>
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
          required
          fullWidth
          label={label}
          value={value}
          variant="outlined"
          className={classes.textField}
          onChange={e => onValueChange(e, id, type)}
          InputLabelProps={{ shrink: !!value || isSelected }}
          onBlur={() => isSelected && setSelectedInputId('')}
          onFocus={() => setSelectedInputId(id)}
        />
      )
    });
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper>
            <form noValidate autoComplete="off" className={classes.root}>
              {renderFormTextFields()}
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.previewPaper}>
            <EmployeePreview data={data} fields={fields} getIdValue={getIdValue} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.btns}>
            <Container maxWidth="xs" className={classes.btnContainer}>
              <NavLink to="/employees">
                <Button variant="contained" color="secondary" className={classes.btn}>Discard</Button>
              </NavLink>
              <Button variant="contained" color="primary" className={classes.btn} onClick={onSaveClicked}>
                Save Employee
            </Button>
            </Container>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar open={alertIsShown}>
        <Alert severity="error">
          All the fields are required!
        </Alert>
      </Snackbar>
    </>
  );
}