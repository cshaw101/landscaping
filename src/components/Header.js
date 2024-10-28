import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme(); // Access the theme

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}> {/* Use theme primary color */}
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}>
            Landscaping Co.
          </Typography>
          <Button color="inherit" sx={{ marginLeft: 2 }}>
            Home
          </Button>
          <Button color="inherit" sx={{ marginLeft: 2 }}>
            Services
          </Button>
          <Button color="inherit" sx={{ marginLeft: 2 }}>
            About Us
          </Button>
          <Button color="inherit" sx={{ marginLeft: 2 }}>
            Contact
          </Button>
          <a href="mailto:shawdevelopment101@gmail.com?subject=Website Inquiry&body=Hello,%0D%0AI'm interested Website Design Services." style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary" sx={{ marginLeft: 2 }}>
              Get Started
            </Button>
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
