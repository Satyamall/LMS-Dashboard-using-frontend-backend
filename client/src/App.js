import React from 'react';
import Container from '@mui/material/Container';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from "./routes/Allroutes.jsx";
import { ThemeProvider,createTheme } from '@mui/material/styles';
const theme = createTheme();

const App = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <AllRoutes />
      </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
