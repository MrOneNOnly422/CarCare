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
  Avatar,
  Menu,
  MenuItem,
  Container
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'; // Ensure this import is present
import Layout from '../components/layout'; // Import your custom Layout

const products = [
  { id: 1, name: 'Engine Belt', price: 50, image: '/img/belt1.jpg' },
  { id: 2, name: 'Oil Filter', price: 150, image: '/img/oilfilter.jpg' },
  { id: 3, name: 'Oil Filter (New)', price: 50, image: '/img/oilfilter1.jpg' },
  { id: 4, name: 'Engine Belt', price: 50, image: '/img/belt1.jpg' },
  { id: 5, name: 'Oil Filter (New)', price: 50, image: '/img/oilfilter1.jpg' },
];

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Layout>
      <Box sx={{ minHeight: '100vh' }}>
        {/* Search Bar with Shopping Cart Icon */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '70px', padding: 2 }}>
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
              width: '100%', 
              maxWidth: 600, 
              borderRadius: '25px', 
              backgroundColor: 'white', 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none', 
                },
                '&.Mui-focused fieldset': {
                  border: 'none', 
                },
              },
            }}
          />
          <Link href="/Cart" passHref> {/* Link to the cart page */}
            <IconButton sx={{ ml: 2 }}>
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Box>

        <Container
          sx={{
            marginTop: '15px',
            padding: 2,
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            marginBottom: '12px'
          }}
        >
          {/* Products Section */}
          <Grid container spacing={3} justifyContent="center"> 
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': { transform: 'scale(1.02)' },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      height: 200, 
                      objectFit: 'cover', 
                      width: '100%', 
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
                      $ {product.price}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Button variant="contained" color="primary" fullWidth>
                          Buy Now
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button variant="outlined" color="primary" fullWidth href="/cart" sx={{ fontSize: '0.690rem' }}>
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