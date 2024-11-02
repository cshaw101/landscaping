import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '70vh', // Increased height for better visibility
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: 'url("/lawn.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker overlay for better text contrast
          zIndex: 1,
          filter: 'blur(3px)', // Blur effect for the background
        },
      }}
    >
      <Typography 
        variant="h2" 
        sx={{ 
          mb: 2, 
          zIndex: 2,
          fontWeight: '700',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
          letterSpacing: '0.05rem',
        }} 
      >
        Welcome to Landscaping Co.
      </Typography>
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 4, 
          zIndex: 2,
          fontWeight: '400',
          textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
          letterSpacing: '0.03rem',
        }} 
      >
        Transforming your outdoor spaces into beautiful landscapes.
      </Typography>
      <a 
        href="mailto:shawdevelopment101@gmail.com?subject=Website Inquiry&body=Hello,%0D%0AI'm interested in your Website Creation services." 
        style={{ textDecoration: 'none' }} // Remove underline from link
      >
        <Button 
          variant="contained" 
          color="secondary" 
          size="large" 
          sx={{ 
            zIndex: 2, 
            marginTop: 2, 
            backgroundColor: '#FFEB3B', // Match the button color with the theme
            color: '#333333', // Dark text color for better readability
            '&:hover': {
              backgroundColor: '#FFD54F', // Darken on hover
            },
          }} 
        >
          Get Started
        </Button>
      </a>
    </Box>
  );
};

export default Hero;
