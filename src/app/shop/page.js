'use client';

import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Box,
  Container,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import Layout from '../components/layout';

const products = [
  { id: 1, name: 'Engine Belt', price: 50, image: '/img/belt1.jpg' },
  { id: 2, name: 'Oil Filter', price: 150, image: '/img/oilfilter.jpg' },
  { id: 3, name: 'Oil Filter (New)', price: 50, image: '/img/oilfilter1.jpg' },
  { id: 4, name: 'Engine Belt', price: 50, image: '/img/belt1.jpg' },
  { id: 5, name: 'Oil Filter (New)', price: 50, image: '/img/oilfilter1.jpg' },
];

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      {/* Full-Height Background */}
      <Box
        sx={{
          backgroundImage: `url('/img/1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          padding: '20px',
          marginTop: '-64px', // Adjust for AppBar height
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Centered Search Bar with Cart Icon */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '900px',
            padding: '16px',
            gap: 2,
          }}
        >
          <TextField
            placeholder="Search for products..."
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            sx={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '25px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': { border: 'none' },
              },
            }}
          />
          <Link href="/Cart" passHref>
            <IconButton
              sx={{
                color: 'white',
                backgroundColor: 'primary.main',
                '&:hover': { backgroundColor: 'primary.dark' },
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Box>

        {/* Product Grid Section */}
        <Container
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            p: 4,
            mt: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            align="center"
            color="primary"
            gutterBottom
          >
            Our Products
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    borderRadius: '12px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': { transform: 'scale(1.03)' },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{ height: 180, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                      ${product.price}
                    </Typography>
                    <Grid container spacing={2} mt={1}>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          size="small"
                          href="/payement(ITEM)"
                        >
                          Buy Now
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="outlined"
                          color="primary"
                          fullWidth
                          size="small"
                          href="/Cart"
                        >
                          Add to Cart
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default HomePage;
