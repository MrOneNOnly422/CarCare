'use client';

import React from 'react';
import { Button, Container, Paper, Grid, Box, Typography } from '@mui/material';
import Layout from '../components/layout'; // or '../layouts/Layout'

function AdminUI() {
  return (
    <>
      {/* Use Layout.js for the AppBar */}
      <Layout>
        {/* Background image */}
        <Box
          sx={{
            backgroundImage: `url(/path-to-admin-background.jpg)`, // Change to a relevant background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          {/* Content container */}
          <Container maxWidth="md" sx={{ pt: 10 }}>
            <Paper elevation={3} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <Grid container spacing={2} alignItems="center">
                
                {/* Admin Panel Header */}
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <img src="/CarCare.png" alt="Nelson's Automotive Shop" style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }} />                              
                </Grid>
                
                {/* Admin Features Buttons */}
                <Grid item xs={12}>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" fullWidth>
                        Customer
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" fullWidth>
                        Mechanic
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" fullWidth>
                        View Booking History
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" fullWidth>
                        View Order History
                      </Button>
                    </Grid>
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

export default AdminUI;
