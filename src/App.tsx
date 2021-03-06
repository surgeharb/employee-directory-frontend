import React from 'react';

// Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

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

const apolloClient = new ApolloClient({
  uri: 'https://api.directory.sergeharb.com/graphql',
});

function App() {
  const location = useLocation();
  const isIdentityPage = location.pathname.includes('identity');

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Container maxWidth="xl" className="Root-Container">
        <Typography variant="h4" className="Root-Title">
          Employee Directory
        </Typography>

        <Breadcrumbs>
          <NavLink to="/employees" activeClassName='Link-Active'>
            <Typography color="textPrimary">Employees List</Typography>
          </NavLink>
          {
            isIdentityPage && (
              <Typography color="textPrimary">Identity</Typography>
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
          <Route exact path="/employees/:id/identity">
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
      </ApolloProvider>
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