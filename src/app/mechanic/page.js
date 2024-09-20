'use client';

import React from 'react';
import { Button, Container, Paper, Grid, Box, Typography } from '@mui/material';
import Layout from '../components/layout'; // or '../layouts/Layout'

function MechanicsHomepage() {
  return (
      <>
          {/* Use Layout.js for the AppBar */}
          <Layout>
              {/* Background image */}
              <Box
                  sx={{
                      backgroundImage: `../public/img/1.jpg`, // Background image path
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '100vh',
                  }}
              >
                  {/* Content container */}
                  <Container maxWidth="md" sx={{ pt: 8}}>
                      <Paper elevation={3} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                          <Grid container spacing={2} alignItems="center" justifyContent="center">
                              {/* Shop Logo */}
                              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                              <img src="/Nelson Shop.PNG" alt="Nelson's Automotive Shop" style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }} />                              
                              </Grid>

                              {/* Shop details and buttons */}
                              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                  <Typography variant="h5" gutterBottom>
                                      Nelson Automotive Shop
                                  </Typography>
                                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                      Location: Lapu-Lapu City
                                  </Typography>
                              </Grid>
                              <Grid container spacing={2} sx={{ mt: 2 }}>
                                  <Grid item xs={12}>
                                      <Button variant="contained" color="primary" fullWidth 
                                     href='/EditProducts'
                                      >
                                          View/Modify Shop Inventory
                                      </Button>
                                  </Grid>
                                  <Grid item xs={12}>
                                      <Button variant="contained" color="primary" fullWidth
                                      href='/bookingrequest'
                                      >
                                          View Booking Requests
                                      </Button>
                                  </Grid>
                                  <Grid item xs={12}>
                                      <Button variant="contained" color="primary" fullWidth
                                      href='/pendingorders'
                                      >
                                          View Pending Orders
                                      </Button>
                                  </Grid>
                                  <Grid item xs={12}>
                                      <Button variant="contained" color="primary" fullWidth
                                      href='/serviceedit'
                                      >
                                          View/Modify Services
                                      </Button>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Paper>
                  </Container>
              </Box>
          </Layout>
      </>
  );
}

export default MechanicsHomepage;