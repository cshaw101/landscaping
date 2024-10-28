import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MantineProvider } from '@mantine/core';
import Header from './components/Header'; // Ensure this path is correct
import Hero from './components/Hero'; // Import your Hero component
import { Container } from '@mui/material';

// Create a custom Material-UI theme
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
      primary: '#333333', // Charcoal Gray for primary text
      secondary: '#B0BEC5', // Stone Gray for secondary text
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
    button: {
      fontSize: '1rem',
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
          {/* Other sections will go here later */}
        </Container>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;
