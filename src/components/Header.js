// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: theme.palette.primary.main,
        paddingY: 1, // Add padding to increase navbar height
      }}
    >
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              fontSize: '1.8rem', // Adjust font size directly if needed
              color: 'white',
            }}
          >
            Landscaping Co.
          </Typography>
          <Button color="inherit" sx={{ fontSize: '1.1rem', marginLeft: 2 }}>
            Home
          </Button>
          <Button color="inherit" sx={{ fontSize: '1.1rem', marginLeft: 2 }}>
            Services
          </Button>
          <Button color="inherit" sx={{ fontSize: '1.1rem', marginLeft: 2 }}>
            About Us
          </Button>
          <Button color="inherit" sx={{ fontSize: '1.1rem', marginLeft: 2 }}>
            Contact
          </Button>
          <a 
            href="mailto:shawdevelopment101@gmail.com?subject=Website Inquiry&body=Hello,%0D%0AI'm interested Website Design Services." 
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontSize: '1.1rem',
                marginLeft: 2,
                paddingX: 2, // Increase padding for a larger button
              }}
            >
              Get Started
            </Button>
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
