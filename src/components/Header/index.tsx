import React from 'react';

// Styles
import './styles.scss';

// UI Components
import { Breadcrumbs, Link, Typography, Divider } from '@material-ui/core';

export function Header() {

  function handleClick() {
    console.log('click');
  }

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Employees
      </Link>
        <Typography color="textPrimary">Add New</Typography>
      </Breadcrumbs>

      <div className="Header-divider">
        <Divider />
      </div>
    </>
  );
}