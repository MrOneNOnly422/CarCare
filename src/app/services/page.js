'use client';

import React, { Component } from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import Layout from '../components/layout'; // Adjust the path to your Layout component

class Services extends Component {
  render() {
    return (
      <Layout>
        {/* Background Image Wrapper */}
        <Box
          sx={{
            backgroundImage: `url("/img/2.jpg")`, // Background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh', // Ensure full height covers the viewport
            padding: '20px',
            marginTop: '-64px', // Adjust this value if your AppBar height differs
            py: 8, // Add vertical padding for spacing
          }}
        >
          {/* Content Container */}
          <Container maxWidth="md">
            <Paper
              elevation={4}
              sx={{
                p: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for better readability
                borderRadius: 4,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                color="primary"
                align="center"
              >
                Our Services
              </Typography>
              <Typography variant="h5" component="p" gutterBottom align="center">
                Quality and reliability in every service we offer.
              </Typography>

              {/* Service Grid */}
              <Grid container spacing={4} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" component="h2" color="secondary">
                      Oil Change
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Keep your engine running smoothly with our fast and efficient oil change service.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" component="h2" color="secondary">
                      Brake Inspection & Repair
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Ensure your safety on the road with our comprehensive brake services.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" component="h2" color="secondary">
                      Tire Rotation & Alignment
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Extend the life of your tires with our tire rotation and alignment services.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" component="h2" color="secondary">
                      Engine Diagnostics
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Get to the root of your engine issues with our advanced diagnostic tools.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Box>
      </Layout>
    );
  }
}

export default Services;
