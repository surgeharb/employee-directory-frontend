import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/App.scss';

// Styles
import { theme } from './assets/styles/theme';
import { ThemeProvider } from '@material-ui/core/styles';

// UI Components
import { Typography, Container, Divider, Breadcrumbs } from '@material-ui/core';

// Containers
import { EmployeesListContainer } from './containers/EmployeesList';
import { EmployeeIdentityContainer } from './containers/EmployeeIdentity';

// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation
} from "react-router-dom";

// Data
import { employeesListFields, employeeIdentityFields } from './data';

function App() {
  const location = useLocation();
  const isIdentityPage = (location.pathname === '/employees/identity');

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Typography variant="h5">
          Employee Directory
        </Typography>

        <Breadcrumbs>
          <NavLink to="/employees" activeClassName='Link-Active'>
            <Typography color="textPrimary">Employees List</Typography>
          </NavLink>
          {
            isIdentityPage && (
              <NavLink to="/employees/identity" activeClassName='Link-Active'>
                <Typography color="textPrimary">Identity</Typography>
              </NavLink>
            )
          }
        </Breadcrumbs>

        <div className="Header-divider">
          <Divider />
        </div>

        <Switch>
          <Route exact path="/employees">
            <EmployeesListContainer fields={employeesListFields} />
          </Route>
          <Route exact path="/employees/identity">
            <EmployeeIdentityContainer fields={employeeIdentityFields} />
          </Route>
          <Route exact path="/">
            <Redirect to="/employees" />
          </Route>
          <Route path="*">
            <Redirect to="/employees" />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default function () {
  return (
    <Router>
      <App />
    </Router>
  );
}