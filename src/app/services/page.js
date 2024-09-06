'use client';

import React, { Component } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import Layout from '../components/layout'; // or '../layouts/Layout'


class Services extends Component {
  render() {
    return (
      <Layout>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom color="primary" align="center">
            Our Services
          </Typography>
          <Typography variant="h5" component="p" gutterBottom align="center">
            Quality and reliability in every service we offer.
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 5 }}>
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
        </Container>
      </Layout>
    );
  }
}

export default Services;

