import React from 'react';
import './assets/styles/App.scss';

// Styles
import { theme } from './assets/styles/theme';
import { ThemeProvider } from '@material-ui/core/styles';

// UI Components
import { Typography, Container } from '@material-ui/core';

// Custom Components
import { Header } from './components/Header';

// Containers
import { EmployeesListContainer } from './containers/EmployeesList';
import { AddEditEmployeeContainer } from './containers/AddEditEmployee';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Typography variant="h5">
          Employee Directory
        </Typography>

        <Header />

        {/* <EmployeesListContainer /> */}
        <AddEditEmployeeContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
