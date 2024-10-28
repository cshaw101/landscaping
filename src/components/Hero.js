import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative', // Make the parent box relative for absolute positioning of the overlay
        height: '60vh', // Set the height of the hero section
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: 'url("/lawn.jpg")', // Use relative path for images in public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Change text color to white
      }}
    >
      {/* Overlay for darkening the image */}
      <Box
        sx={{
          position: 'absolute', // Position it absolutely to cover the entire Box
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with 50% opacity
          zIndex: 1, // Ensure overlay is above the image
        }}
      />
      
      {/* Text content on top of the overlay */}
      <Typography 
        variant="h2" 
        sx={{ 
          mb: 2, 
          zIndex: 2,
          fontWeight: '700', // Increase font weight
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add text shadow
          letterSpacing: '0.05rem', // Adjust letter spacing
        }} 
      >
        Welcome to Landscaping Co.
      </Typography>
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 4, 
          zIndex: 2,
          fontWeight: '400', // Adjust font weight
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', // Add text shadow
          letterSpacing: '0.03rem', // Adjust letter spacing
        }} 
      >
        Transforming your outdoor spaces into beautiful landscapes.
      </Typography>
      <Button variant="contained" color="secondary" href="#get-started" sx={{ zIndex: 2 }}>
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;
