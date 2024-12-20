'use client';

import React from 'react';
import { Button, Container, Paper, Grid, Box, Typography } from '@mui/material';
import Layout from '../components/layout'; // or '../layouts/Layout'
import Footer from '../components/footer'; // Import Footer component

function MechanicsHomepage() {
  return (
      <>
          {/* Use Layout.js for the AppBar */}
          <Layout>
              {/* Updated Background image and layout */}
              <Box
                  sx={{
                      backgroundImage: `url("/img/3.jpg")`, // Updated background image
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      minHeight: '100vh', // Full viewport height
                      padding: '20px',
                      marginTop: '-64px', // Adjusted to offset AppBar height
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                  }}
              >
                  {/* Content container */}
                  <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                      <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}>
                          <Grid container spacing={2} alignItems="center" justifyContent="center">
                              {/* Shop Logo */}
                              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                  <img
                                      src="/Nelson Shop.PNG"
                                      alt="Nelson's Automotive Shop"
                                      style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }}
                                  />
                              </Grid>

                              {/* Shop details */}
                              <Grid item xs={12}>
                                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0288d1' }} gutterBottom>
                                      Nelson Automotive Shop
                                  </Typography>
                                  <Typography variant="h6" sx={{ fontWeight: 'normal', color: '#00674F' }} gutterBottom>
                                      Location: Lapu-Lapu City
                                  </Typography>
                              </Grid>

                              {/* Action buttons */}
                              <Grid container spacing={2} sx={{ mt: 2 }}>
                                  <Grid item xs={12} sm={6}>
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          fullWidth
                                          href='/EditProducts'
                                          sx={{ textTransform: 'none' }}
                                      >
                                          View/Modify Shop Inventory
                                      </Button>
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          fullWidth
                                          href='/bookingrequest'
                                          sx={{ textTransform: 'none' }}
                                      >
                                          View Booking Requests
                                      </Button>
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          fullWidth
                                          href='/pendingorders'
                                          sx={{ textTransform: 'none' }}
                                      >
                                          View Pending Orders
                                      </Button>
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          fullWidth
                                          href='/serviceedit'
                                          sx={{ textTransform: 'none' }}
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

          {/* Footer section */}
          <Footer /> {/* Add Footer here */}
      </>
  );
}

export default MechanicsHomepage;
