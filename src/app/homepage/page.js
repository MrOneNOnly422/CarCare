'use client';

import React, { useState } from 'react';
import Footer from '../components/footer';
import {
  Container,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  InputAdornment,
  Typography,
} from '@mui/material';
import Layout from '../components/layout';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';

const repairShops = [
  {
    name: "My Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/1.jpg",
    rating: 4,
  },
  {
    name: "Our Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/2.jpg",
    rating: 5,
  },
  {
    name: "Wala Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/3.jpg",
    rating: 4,
  },
  {
    name: "Another Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/4.jpg",
    rating: 3,
  },
];

const RepairShopCard = ({ shop }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '16px',
      backgroundColor: '#212121',
      color: 'white',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
      '&:hover': { transform: 'scale(1.05)' }, // Hover effect
    }}
  >
    <CardMedia
      component="img"
      sx={{
        height: 140,
        objectFit: 'cover',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
      }}
      image={shop.imageUrl}
      alt={shop.name}
    />
    <CardContent>
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 1 }}
      >
        {shop.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{ textAlign: 'center', color: '#b0bec5', marginBottom: 2 }}
      >
        {shop.description}
      </Typography>
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        {Array.from({ length: shop.rating }).map((_, i) => (
          <StarIcon key={i} sx={{ color: '#ffd54f', fontSize: '1rem' }} />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          href="/services"
          fullWidth
          sx={{ borderRadius: '8px' }}
        >
          Visit Now
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          href="/shop"
          fullWidth
          sx={{ borderRadius: '8px' }}
        >
          Shop
        </Button>
      </Box>
    </CardContent>
  </Card>
);

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredShops = repairShops.filter((shop) =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url("/img/1.jpg")`, // Background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure full height covers the viewport
          padding: '20px',
          marginTop: '-64px', // Adjust this value if your AppBar height differs
        }}
      >
        {/* Background overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: -1,
          }}
        />
        <Container maxWidth="md">
          {/* Search Bar */}
          <Box sx={{ my: 4, textAlign: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search for repair shops..."
              sx={{
                backgroundColor: 'white',
                width: '100%',
                maxWidth: '600px',
                borderRadius: '25px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Box>

          {/* Repair Shops */}
          <Grid container spacing={4} justifyContent="center">
            {filteredShops.map((shop, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <RepairShopCard shop={shop} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Layout>
  );
};

export default Homepage;
