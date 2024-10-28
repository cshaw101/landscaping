import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: 'url("/lawn.jpg")', // Make sure your image path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />
      <Typography 
        variant="h2" 
        sx={{ 
          mb: 2, 
          zIndex: 2,
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
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
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
          letterSpacing: '0.03rem',
        }} 
      >
        Transforming your outdoor spaces into beautiful landscapes.
      </Typography>
      {/* Use Material-UI Button with the same styles as the navbar */}
      <a 
        href="mailto:shawdevelopment101@gmail.com?subject=Website Inquiry&body=Hello,%0D%0AI'm interested in your landscaping services." 
        style={{ textDecoration: 'none' }} // Remove underline from link
      >
        <Button 
          variant="contained" 
          color="secondary" // Use the same color as the navbar's Get Started button
          size="large" // Match the size to your navbar button
          sx={{ zIndex: 2, marginTop: 2 }} // Maintain zIndex for stacking order
        >
          Get Started
        </Button>
      </a>
    </Box>
  );
};

export default Hero;

