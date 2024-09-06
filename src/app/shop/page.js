'use client';

import React from 'react';
import Layout from '../components/layout'; // or '../layouts/Layout'
import { Container, Typography, TextField, Button, Grid, Card, CardContent, CardActions } from '@mui/material';

const products = [
  { id: 1, name: 'Engine Belt', price: 50 },
  { id: 2, name: 'Oil Filter', price: 150 },
];

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Nelson's Automotive
        </Typography>
        
        <TextField 
          fullWidth 
          variant="outlined" 
          placeholder="Search" 
          style={{ marginBottom: '20px' }} 
        />
        
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{product.name}</Typography>
                  <Typography variant="h6">${product.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained">Buy Now</Button>
                  <Button size="small" variant="outlined">Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default HomePage;