import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import * as Icons from '@tabler/icons-react';

const services = [
  {
    title: 'Lawn Maintenance',
    description: 'Regular lawn care services to keep your lawn lush and green.',
    icon: <Icons.IconTools size={50} color="white" />,
  },
  {
    title: 'Planting & Gardening',
    description: 'Expert planting and gardening services for beautiful landscapes.',
    icon: <Icons.IconPlant size={50} color="white" />,
  },
  {
    title: 'Tree & Shrub Care',
    description: 'Professional tree and shrub maintenance to promote healthy growth.',
    icon: <Icons.IconTrees size={50} color="white" />,
  },
];

const Services = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        px: 2,
        backgroundColor: theme => theme.palette.background.default,
        maxWidth: '1200px',
        margin: '0 auto',  // Center-aligns the section
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: 6,
          fontWeight: '700',
          color: theme => theme.palette.primary.main,
          textTransform: 'uppercase',
          letterSpacing: '0.1rem',
        }}
      >
        Our Professional Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ minWidth: '300px' }}>
            <Card
              sx={{
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 4,
                borderRadius: '20px',
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                background: `linear-gradient(135deg, ${index % 2 === 0 ? '#6A994E' : '#3A6351'}, #406343)`, // Green gradient for variation
                color: 'white',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  marginBottom: 3,
                }}
              >
                {service.icon}
              </Box>
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: '600',
                    mb: 1,
                    letterSpacing: '0.03em',
                    color: 'white',
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.75,
                    fontSize: '1.1rem',
                    color: 'white',
                    opacity: 0.85,
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
