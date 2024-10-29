import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MantineProvider } from '@mantine/core';
import Header from './components/Header'; // Ensure this path is correct
import Hero from './components/Hero'; // Import your Hero component
import { Container } from '@mui/material';
import Services from './components/Services';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Forest Green
    },
    secondary: {
      main: '#FFEB3B', // Sunshine Yellow
    },
    background: {
      default: '#FFF8E1', // Cream
    },
    text: {
      primary: '#333333',
      secondary: '#B0BEC5',
    },
  },
  typography: {
    fontSize: 18, // Increased global font size
    h1: {
      fontSize: '2.8rem',
    },
    h2: {
      fontSize: '2.4rem',
    },
    h3: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1.3rem',
    },
    button: {
      fontSize: '1.1rem',
    },
  },
});


function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <Container maxWidth="lg">
         <Services />
        </Container>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;
