'use client';

import React, { Component } from 'react';
import Footer from '../components/footer'; // Ensure correct case and path
import { Container, Typography, Button, Box } from '@mui/material';
import Layout from '../components/layout'; // or '../layouts/Layout'

class Homepage extends Component {
  render() {
    return (
      <Layout>
        <Container maxWidth="md">
          <Box sx={{ my: 4, textAlign: 'center' }}>
            <Typography variant="h3" component="h1" gutterBottom color="primary">
              Welcome to AutoFix Repair Shop
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Your trusted partner for all car repair and maintenance needs.
            </Typography>
            <Button variant="contained" color="primary" href="#" sx={{ mt: 3 }}>
              Get Started
            </Button>
          </Box>
        </Container>
        {/* Footer added below */}
        <Footer />
      </Layout>
    );
  }
}

export default Homepage;



