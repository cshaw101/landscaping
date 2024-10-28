import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header'; // Ensure this path is correct
import Hero from './components/Hero'; // Import the Hero component
import { Container } from '@mui/material';

// Create a custom theme with your color palette and typography
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
      fontSize: '2.5rem', // Increase size for h1
    },
    h2: {
      fontSize: '2rem', // Increase size for h2
    },
    h3: {
      fontSize: '1.75rem', // Increase size for h3
    },
    body1: {
      fontSize: '1.2rem', // Increase size for body text
    },
    button: {
      fontSize: '1rem', // Increase size for button text
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero /> {/* Add the Hero component here */}
      <Container maxWidth="lg">
        {/* Other sections will go here later */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
